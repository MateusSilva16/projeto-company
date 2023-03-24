import tokens from '@/utils/tokens';
import styled from 'styled-components';

export const FormCuston = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1em;
  gap: 10px;


  @media (max-width: 470px) {
    width: 350px;
    margin-top: 0.7em;
  }

  @media (max-width: 370px) {
    width: 300px;
    margin-top: 0.7em;
  }
`;

export const InputButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: ${tokens.colors.color4};
  width: 120px;
  padding: 0.5em 1em;
  text-decoration: none;
  /*   transition: 0.5s; */
  cursor: pointer;
  color: ${tokens.colors.color1};
  font-size: 0.9em;
  border: none;
  border-radius: 5px;
  :hover {
    background-color: ${tokens.colors.color1};
    color: ${tokens.colors.color4};
  }

  @media (max-width:470px) {
    width: 100%;
  }
`;


