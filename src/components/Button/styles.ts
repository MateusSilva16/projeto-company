import tokens from '@/utils/tokens';
import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  background-color: ${tokens.colors.color4};
  padding: 0.5em 1em;
  text-decoration: none;
  /*   transition: 0.5s; */
  cursor: pointer;
  color: ${tokens.colors.color1};
  font-size: 1em;
  border: 3px solid ${tokens.colors.color1};
  border-radius: 5px;
  :hover {
    background-color: ${tokens.colors.color1};
    color: ${tokens.colors.color4};
  }
`;

export const Title = styled.h1`
  font-size: 1em;
  color: ${tokens.colors.color1};
`;
