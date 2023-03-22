import * as S from './styles';


const InputCuston = ({
  type,
  name,
  placeholder,
  handleOnChange,
  value,
}: any) => {
  return (
    <S.ContainerInput>
      <h3>{name}</h3>
      <S.InputCuston
        type={type}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </S.ContainerInput>
  );
};

export default InputCuston;
