import tokens from '@/utils/tokens';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background-color: ${tokens.colors.content};
  width: 100%;
  height: 100vh;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 40px;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 0px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
  grid-area: auto;
  gap: 15px;
  background-color: ${tokens.colors.content};
  width: 100%;

  @media (max-width: 1147px) {
    grid-template-columns: 33% 33% 33%;
  }

  @media (max-width: 860px) {
    grid-template-columns: 50% 50%;
  }

  @media (max-width: 580px) {
    grid-template-columns: 100%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2em;

  @media (max-width: 580px) {
    flex-direction: column;
    h1 {
      margin-bottom: 0.5em;
    }
  }
`;
