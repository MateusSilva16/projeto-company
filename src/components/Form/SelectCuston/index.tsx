import * as S from './styles';
import { SelectProps } from './types';

const SelectCuston = ({ nameSelect, placeholder }: SelectProps) => {
  return (
    <S.ContainerInput>
      <h3>{nameSelect}</h3>
      <S.SelectCuston name="categoria_id">
        <option disabled selected>
          Selecione à categoria
        </option>
      </S.SelectCuston>
    </S.ContainerInput>
  );
};

export default SelectCuston;
