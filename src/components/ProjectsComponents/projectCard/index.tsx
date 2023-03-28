import * as S from './styles';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Button from '@/components/Buttons/ButtonDefault';

const ProjetCard = ({
  id,
  name,
  budget,
  category,
  handleRemove,
  handleOpen,
}: any) => {
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
        <Link to={`/editProject/${id}`}>
          <S.Edit>
            <BsPencil />
            <p>Editar</p>
          </S.Edit>
        </Link>

        <Button
          action={remove}
          text={'Remover'}
          icon={<BsFillTrashFill />}
          width={'110px'}
        />
      </S.Actions>
    </S.Container>
  );
};

export default ProjetCard;
