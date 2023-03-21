import LinkButton from '@/components/Button';
import { usePageTitle } from '@/hooks/usePageTitle';
import * as S from './styles';

const Home = () => {
  usePageTitle('Project Budget - Home');
  return (
    <S.Container>
      <S.Title>
        Bem-vindo ao <span>Project Budget</span>
      </S.Title>
      <S.Description>
        Começe a gerenciar os seus projetos agora mesmo
      </S.Description>
      <LinkButton to="/newProject" text="Criar Projeto" />
      <S.Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Emblem-money.svg/640px-Emblem-money.svg.png"
        alt="PROJECT BUDGET"
      />
    </S.Container>
  );
};

export default Home;
