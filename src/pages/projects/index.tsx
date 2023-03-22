import Message from '@/components/Message';
import { useLocation } from 'react-router-dom';
import * as S from './styles';

const Projects = () => {
  const locatin = useLocation();
  let message = '';

  if (locatin.state) {
    message = locatin.state.message;
  }

  return (
    <S.Container>
      <h1>Meus Projetos</h1>
      {message && <Message msg={message} typeSucess={true} />} 
    </S.Container>
  );
};

export default Projects;
