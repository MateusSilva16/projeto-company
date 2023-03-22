import * as S from './styles';
import { SelectProps } from './types';

const SelectCuston = ({
  nameSelect,
  name,
  options,
  handleOnChange,
  value,
}: any) => {
  return (
    <S.ContainerInput>
      <S.Label htmlFor={name}>{nameSelect}</S.Label>
      <S.SelectCuston
        name={name}
        id={nameSelect}
        onChange={handleOnChange}
        value={value || ''}
      >
        <option>Selecione à categoria</option>
        {options.map((option: any) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </S.SelectCuston>
    </S.ContainerInput>
  );
};

export default SelectCuston;
