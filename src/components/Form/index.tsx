import InputCuston from './InputCuston';
import SelectCuston from './SelectCuston';
import * as S from './styles';

const Forms = ({btnTExt}:any) => {
  return (
    <S.FormCuston>
      <InputCuston
        type="text"
        name="Nome do Projeto:"
        placeholder="Insira Nome do Projeto"
      />
      <InputCuston
        type="number"
        name="Orçamento Total:"
        placeholder="Insira Orçamento Total"
      />

      <SelectCuston
        nameSelect="Categoria:"
      />

      <S.InputButton type="submit">{btnTExt}</S.InputButton>
    </S.FormCuston>
  );
};

export default Forms;
