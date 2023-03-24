import tokens from '@/utils/tokens';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${tokens.colors.color2};
  padding: 1em;
  border: 1px solid #7a7a7a;
  border-radius: 5px;
  width: 100%;
  margin: 0.8%;
  
  h4 {
    background-color: #222;
    padding: 1em;
    margin-bottom: 1.3em;
    font-size: 1.3em;
  }

  p {
    color: #9a9a9a;
    margin-bottom: 1em;
  }

  span {
    font-weight: bold;
  }
`;

export const TextCategory = styled.p`
  display: flex;
  align-items: center;

  span {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${tokens.colors.color4};
    margin-right: 5px;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1147px) {
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    margin-top: 0.5em;
  }
`;

export const Edit = styled.button`
 display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #222;
  color: ${tokens.colors.color4};
  padding: 0.6em 1em;
  font-size: 0.9em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0.2em;
  transition: 0.2s;

  p {
    margin: 0;
    padding: 0 0.5em;
  }

  :hover {
    background-color: ${tokens.colors.color4};
    color: #222;

    p {
      margin: 0;
      padding: 0 0.5em;
      color: #222;
    }
  }
`;
