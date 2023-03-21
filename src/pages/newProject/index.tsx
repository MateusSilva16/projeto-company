import Forms from '@/components/Form';
import { usePageTitle } from '@/hooks/usePageTitle';
import * as S from './styles';

const NewProject = () => {
  usePageTitle('Project Budget - Novo Projeto');
  return (
    <S.Container>
      <S.ContainerDescription>
        <S.Title>Criar seu Projeto</S.Title>
        <S.Description>
          Crie seu Projeto para depois adicionar novos serviços
        </S.Description>
      </S.ContainerDescription>

      <Forms btnTExt={'Criar Projeto'}/>
    </S.Container>
  );
};

export default NewProject;
