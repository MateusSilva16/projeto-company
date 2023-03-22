import Forms from '@/pages/newProject/Form';
import { usePageTitle } from '@/hooks/usePageTitle';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

const NewProject = () => {
  const history = useNavigate();

  function createPost(project: any) {
    project.cost = 0;
    project.services = [];

    fetch('http://localhost:5000/projects/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        history('/projects', {
          state: { message: 'Projeto criado com sucesso!' },
        });
      })
      .catch((err) => console.log(err));
  }

  usePageTitle('Project Budget - Novo Projeto');
  return (
    <S.Container>
      <S.ContainerDescription>
        <S.Title>Criar seu Projeto</S.Title>
        <S.Description>
          Crie seu Projeto para depois adicionar novos serviços
        </S.Description>
      </S.ContainerDescription>

      <Forms btnTExt={'Criar Projeto'} handleSubmit={createPost} />
    </S.Container>
  );
};

export default NewProject;
