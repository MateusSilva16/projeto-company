import { usePageTitle } from '@/hooks/usePageTitle';
import { Container } from './styles';

const NewProject = () => {
  usePageTitle('Project Commpany - Novo Projeto');
  return <Container>NewProject</Container>;
};

export default NewProject;
