import Button from '@/components/Buttons/ButtonDefault';
import Loading from '@/components/Loading';
import Message from '@/components/Message';
import ServiceForm from '@/components/ServiceComponents/serviceForm/serviceForm';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Forms from '../../components/ProjectsComponents/projectForm';
import * as S from './styles';
import { parse, v4 as uuidV4 } from 'uuid';

function EditProject() {
  let { id } = useParams();

  const [project, setProject] = useState<any>([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data);
        })
        .catch((err) => console.error(err));
    }, 1000);
  }, [id]);

  function editPost(project: any) {
    setMessage('');
    // build validation
    if (project.budget < project.cost) {
      setMessage('O orçamento não pode ser menor que o custo do projeto');
      setType(false);
      return false;
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(!showProjectForm);
        setMessage('Projeto Atualizado!');
        setType(true);
      })
      .catch((err) => console.error(err));
  }
  
  function createService(project:any) {
    const lastService = project.services[project.services.length - 1];

    lastService.id = uuidV4();


    const newCost = parseFloat(project.cost) + parseFloat(lastService)

    //maximum value validation

    if(newCost > parseFloat(project.budget)){
      setMessage('Orçamento ultrappassado, verifique o valor do serviço')
      setType(false)
      project.services.pop()
      return false;
    }
  }

  function toggledProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function toggledServiceForm() {
    setShowServiceForm(!showServiceForm);
  }

  return (
    <>
      {project.name ? (
        <S.Container>
          <S.Content>
            {message && <Message typeSucess={type} msg={message} />}
            <S.ContainerDetails>
              <h1>Projeto: {project.name}</h1>
              <Button
                action={toggledProjectForm}
                text={!showProjectForm ? 'Editar Projeto ' : 'Fechar'}
                width={'140px'}
              />

              {!showProjectForm ? (
                <S.ContentDetails>
                  <p>
                    <span>Categoria: </span>
                    {project.category.name}
                  </p>
                  <p>
                    <span>Total de Orcçamento: </span>
                    R$ {project.budget}
                  </p>
                  <p>
                    <span>Total Utilizado: </span>
                    R$ {project.cost}
                  </p>
                </S.ContentDetails>
              ) : (
                <S.ProjectInfo>
                  <Forms
                    handleSubmit={editPost}
                    btnText="Salvar"
                    projectData={project}
                  />
                </S.ProjectInfo>
              )}
            </S.ContainerDetails>

            <S.ServiceFormContainer>
              <h2>Adicione um Serviço: </h2>
              <Button
                action={toggledServiceForm}
                text={!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                width={'170px'}
              />
              <S.ContentDetails>
                {showServiceForm && <ServiceForm
                handleSubmit={createService}
                btnText="Adicionar Serviço"
                projectData={project}
                />}
              </S.ContentDetails>
            </S.ServiceFormContainer>
            <h2>Serviços</h2>
            <S.ContentDetails>
              <p>Itens de serviços</p>
            </S.ContentDetails>
          </S.Content>
        </S.Container>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default EditProject;
