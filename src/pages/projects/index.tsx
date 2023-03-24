import LinkButton from '@/components/Buttons/ButtonLink';
import Content from '@/components/Layout/Content';
import Message from '@/components/Message';
import ProjetCard from '@/components/ProjectsComponents/projectCard';
import { useLocation } from 'react-router-dom';
import * as S from './styles';
import React, { useState, useEffect } from 'react';
import Loading from '@/components/Loading';
import { usePageTitle } from '@/hooks/usePageTitle';
import Modal from '@/components/Modal';
import EditProject from '../editProject';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  usePageTitle('Project Budget - Projetos');
  const [projectMessage, setProjectMessage] = useState('');

  const locatin = useLocation();
  let message = '';

  if (locatin.state) {
    message = locatin.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/projects', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProjects(data);
          setRemoveLoading(true);
        })
        .catch((err) => console.log(err));
    }, 1000);
  }, []);

  function removeProject(id: any) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(projects.filter((project: any) => project.id !== id));
        setProjectMessage('Projeto removido com sucesso !!');
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <S.Container>
        <S.TitleContainer>
          <h1>Meus Projetos</h1>
          <LinkButton to="/newProject" text="Criar Projeto" />
        </S.TitleContainer>
        <S.Content>
          {projects.length > 0 &&
            projects.map((project: any) => (
              <ProjetCard
                name={project.name}
                id={project.id}
                budget={project.budget}
                category={project.category.name}
                key={project.id}
                handleRemove={removeProject}
              />
            ))}
          {!removeLoading && <Loading />}

          {removeLoading && projects.length === 0 && (
            <p>Não há projetos cadastrados !</p>
          )}
        </S.Content>
      </S.Container>
      {projectMessage && <Message msg={projectMessage} typeSucess={false} />}
      {message && <Message msg={message} typeSucess={true} />}

    </>
  );
};

export default Projects;
