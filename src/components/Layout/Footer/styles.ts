import tokens from '@/utils/tokens';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: ${tokens.colors.color1};
  padding: 50px;
`;

export const Copy = styled.h5`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: ${tokens.colors.color4};
  font-size: 12px;
  font-weight: 100;
  margin: 0px;
`;

export const ContainerLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${tokens.colors.color4};
  margin: 8px 0;
`;

export const Links = styled.a`
  color: ${tokens.colors.color4};
  margin: 12px 20px;
  cursor: pointer;
  :hover {
    color: ${tokens.colors.color3};
  }
`;
