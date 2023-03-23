import * as S from './styles';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ProjetCard = ({ id, name, budget, category, handleRemove }: any) => {
  const remove = (e: any) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <S.Container>
      <h4>{name}</h4>
      <p>
        <span>Orçamento: </span>R${budget}
      </p>
      <S.TextCategory>
        <span></span> {category}
      </S.TextCategory>
      <S.Actions>
        <Link to={'/'}>
          <S.Edit>
            <BsPencil />
            <p>Editar</p>
          </S.Edit>
        </Link>

        <S.Remove onClick={remove}>
          <BsFillTrashFill />
          <p>Remover</p>
        </S.Remove>
      </S.Actions>
    </S.Container>
  );
};

export default ProjetCard;
