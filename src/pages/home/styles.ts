import tokens from '@/utils/tokens';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${tokens.colors.content};
  width: 100%;
  height: 87vh;
`;

export const Title = styled.h1`
  color: ${tokens.colors.color4};
  font-size: 2.5em;
  margin-bottom: 0.5em;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 400;

  span {
    color: ${tokens.colors.color4};
    background-color: ${tokens.colors.color1};
    padding: 0 0.2em;
  }


  @media (max-width: 768px) {
     font-size: 2.0em;
  }

  @media (max-width: 539px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
`;

export const Description = styled.p`
 text-align: center;
  margin-bottom: 1.5em;
  color: ${tokens.colors.color4};
`;

export const Link = styled.a``;

export const Image = styled.img`
  width: 250px;
  margin: 2em 0; 

  @media (max-width: 539px) {
    width: 200px;
  }
`;
