import tokens from '@/utils/tokens';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    background-color: transparent;
    width: 0px;
  }
  h1 {
    background-color: #222;
    color: ${tokens.colors.color4};
    padding: 1em;
    margin-bottom: 0.5em;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
  }
  h2 {
    font-family: sans-serif;
  }
  p {
    margin: 0.2em 0;
    font-weight: 100;
    font-family: sans-serif;
    color: #999;
  }
  span {
    font-weight: 800;
    color: ${tokens.colors.color4};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px;
`;

export const ContainerDetails = styled.div`
  border-bottom: 1px solid #7a7a7a;
  margin-bottom: 1.2em;
  padding-bottom: 1.2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const ContentDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0.1em;
  width: 100%;
`;

export const ProjectInfo = styled.div`
  width: 100%;
`;

export const ServiceFormContainer = styled.div`
  border-bottom: 1px solid #7a7a7a;
  margin-bottom: 1.2em;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;


export const ContainerDetailsService = styled.div`
  border-bottom: 1px solid #7a7a7a;
  margin-bottom: 1.2em;
  padding-bottom: 1.2em;
  margin-top: 1em;
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
  grid-area: auto;
  gap: 15px;
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
