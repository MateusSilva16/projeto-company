import Button from '@/components/Buttons/ButtonDefault';
import { BsFillTrashFill, BsPencil } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import * as S from './styles';

const ServiceCard = ({ id, name, cost, description, handleRemove }: any) => {
  const remove = (e: any) => {
    e.preventDefault();
    handleRemove(id, cost);
  };

  return (
    <S.Container>
      <h4>{name}</h4>
      <p>
        <span>Custo total: </span>R${cost}
      </p>
      <S.TextCategory>{description}</S.TextCategory>
      <S.Actions>
        <Button
          action={remove}
          text='Excluir'
          icon={<BsFillTrashFill />}
          width={'120px'}
        />
      </S.Actions>
    </S.Container>
  );
};

export default ServiceCard;
