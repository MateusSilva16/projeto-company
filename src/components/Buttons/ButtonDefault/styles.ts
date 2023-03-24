import tokens from '@/utils/tokens';
import styled from 'styled-components';

export const ButtonCustom = styled.button<{
  width: string;
  height: string;
  justifyContent: string;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props: any) =>
    props.justifyContent ? props.justifyContent : 'center'};
  background-color: #222;
  color: ${tokens.colors.color4};
  width: ${(props: any) => (props.width ? props.width : '100%')};
  height: ${(props: any) => (props.height ? props.width : '40px')};
  padding: 0.6em 1em;
  font-size: 0.9em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0.2em 0;
  transition: 0.2s;

  p {
    margin: 0;
    padding: 0 0.5em;
    color: ${tokens.colors.color4} !important;
  }

  :hover {
    background-color: ${tokens.colors.color4};
    color: #222;

    p {
      margin: 0;
      padding: 0 0.5em;
      color: #222 !important;
    }
  }
`;
