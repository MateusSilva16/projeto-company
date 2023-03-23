import { useState, useEffect } from 'react';
import InputCuston from '../../../components/Inputs/InputCuston';
import SelectCuston from '../../../components/Inputs/SelectCuston';
import * as S from './styles';

const Forms = ({ handleSubmit, btnTExt, projectData }: any) => {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e: any) => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleChange(e: any) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e: any) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <S.FormCuston onSubmit={submit}>
      <InputCuston
        label="Nome do Projeto:"
        type="text"
        name="name"
        placeholder="Insira Nome do Projeto"
        handleOnChange={handleChange}
        value={project.name}
      />

      <InputCuston
        label="Orçamento Total:"
        type="number"
        name="budget"
        placeholder="Insira Orçamento Total"
        handleOnChange={handleChange}
        value={project.budget}
      />

      <SelectCuston
        name="category_id"
        nameSelect="Categoria:"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
      />

      <S.InputButton type="submit">{btnTExt}</S.InputButton>
    </S.FormCuston>
  );
};

export default Forms;
