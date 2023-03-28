import InputCuston from '@/components/Inputs/InputCuston';
import { FormCuston, InputButton } from './styles';
import { useState } from 'react';

function ServiceForm({ handleSubmit, btnText, projectData }: any) {
  const [service, setService] = useState({});

  const submit = (e: any) => {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  };

  function handleChange(e: any) {
    setService({ ...service, [e.target.name]: e.target.value });
  }
  return (
    <FormCuston onSubmit={submit}>
      <InputCuston
        label="Nome do serviço:"
        handleOnChange={handleChange}
        type="text"
        placeholder="Digite o nome do serviço"
        name="name"
      />
      <InputCuston
        label="Custo do serviço:"
        handleOnChange={handleChange}
        type="number"
        placeholder="Insira o valor total"
        name="cost"
      />
      <InputCuston
        label="Descrição do serviço:"
        handleOnChange={handleChange}
        type="text"
        placeholder="Descreva o serviço"
        name="description"
      />
      <InputButton type="submit">{btnText}</InputButton>
    </FormCuston>
  );
}

export default ServiceForm;
