import * as S from './styles';
import { InputProps } from './types';

const InputCuston = ({type,name,placeholder} :InputProps) => {
  return (
    <S.ContainerInput>
      <h3>{name}</h3>
      <S.InputCuston type={type} placeholder={placeholder}/>
    </S.ContainerInput>
  );
};

export default InputCuston;
