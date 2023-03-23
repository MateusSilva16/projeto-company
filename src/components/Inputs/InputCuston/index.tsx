import * as S from './styles';

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  handleOnChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value: string | number | readonly string[] | undefined;
  label: string;
}

const InputCuston = ({
  type,
  name,
  placeholder,
  handleOnChange,
  value,
  label,
}: InputProps) => {
  return (
    <S.ContainerInput>
      <h3>{label}</h3>
      <S.InputCuston
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </S.ContainerInput>
  );
};

export default InputCuston;
