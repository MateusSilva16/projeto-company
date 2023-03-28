import Button from '@/components/Buttons/ButtonDefault';
import Loading from '@/components/Loading';
import Message from '@/components/Message';
import ServiceForm from '@/components/ServiceComponents/serviceForm';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Forms from '../../components/ProjectsComponents/projectForm';
import * as S from './styles';
import { parse, v4 as uuidV4 } from 'uuid';
import ServiceCard from '@/components/ServiceComponents/serviceCard';

function EditProject() {
  let { id } = useParams();
  const [project, setProject] = useState<any>([]);
  const [services, setServices] = useState<any>([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);

  const [message, setMessage] = useState('');
  const [type, setType] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data);
          setServices(data.services);
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

  function createService(project: any) {
    setMessage('');

    // last service
    const lastService = project.services[project.services.length - 1];

    lastService.id = uuidV4();

    const lastServiceCost = lastService.cost;

    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

    // maximum value validation
    if (newCost > parseFloat(project.budget)) {
      setMessage('Orçamento ultrapassado, verifique o valor do serviço!');
      setType(false);
      project.services.pop();
      return false;
    }

    // add service cost to project cost total
    project.cost = newCost;

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setServices(data.services);
        setShowServiceForm(!showServiceForm);
        setMessage('Serviço adicionado!');
        setType(true);
      })
      .catch((err) => console.error(err));
  }

  /* function removeService({ id, cost }: any) {
    setMessage('');
    const servicesUpdated = project.services.filter(
      (service: any) => service.id !== id
    );

    const projectUpdated = project;

    projectUpdated.services = servicesUpdated;
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost);

    fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectUpdated),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(projectUpdated);
        setServices(servicesUpdated);
        setMessage('Serviço removido com sucesso!');
      })
      .catch((err) => console.error(err));
  } */

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
                    <span>Total do Orçamento Inicial: </span>
                    R$ {project.budget}
                  </p>
                  {project.cost > 0 && (
                    <p>
                      <span>Restante do Orçamento: </span>
                      R$ {project.budget - project.cost}
                    </p>
                  )}
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
                {showServiceForm && (
                  <ServiceForm
                    handleSubmit={createService}
                    btnText="Adicionar Serviço"
                    projectData={project}
                  />
                )}
              </S.ContentDetails>
            </S.ServiceFormContainer>
            <h2>Serviços</h2>
            <S.ContainerDetailsService>
              {services.length > 0 &&
                services.map((service: any) => (
                  <ServiceCard
                    id={service.id}
                    name={service.name}
                    cost={service.cost}
                    description={service.description}
                    key={service.id}
                    //handleRemove={removeService}
                  />
                ))}

              {services.length === 0 && <p>Não há serviços cadastrados</p>}
            </S.ContainerDetailsService>
          </S.Content>
        </S.Container>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default EditProject;
