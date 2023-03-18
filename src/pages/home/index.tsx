import { usePageTitle } from '@/hooks/usePageTitle';
import * as S from './styles';

const Home = () => {
  usePageTitle('Project Commpany - Home');
  return <S.Container>Home</S.Container>;
};

export default Home;
