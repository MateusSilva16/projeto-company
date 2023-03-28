import Button from '@/components/Buttons/ButtonDefault';
import { BsFillTrashFill, BsPencil } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import * as S from './styles';

const ServiceCard = ({ id, name, cost, description, handleRemove }: any) => {
  const remove = (e: any) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <S.Container>
      <h4>{name}</h4>
      <p>
        <span>Custo total: </span>R${cost}
      </p>
      <S.TextCategory>{description}</S.TextCategory>
      {/*   <S.Actions>
     <S.ButtonRemove onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </S.ButtonRemove> 
      </S.Actions>*/}
    </S.Container>
  );
};

export default ServiceCard;
