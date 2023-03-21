import tokens from '@/utils/tokens';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${tokens.colors.content};
  width: 100%;
  height: 100%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const ContainerDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 425px) {
    margin-bottom: 0px;
    margin-top: 0px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 0.5em;
`;

export const Description = styled.p`
  font-weight: 100;
  text-align: center;

  @media (max-width: 470px) {
    font-size: 13px;
  }
`;
