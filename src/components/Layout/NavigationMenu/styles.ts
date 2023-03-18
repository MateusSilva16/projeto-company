import styled from 'styled-components';
import tokens from '../../../utils/tokens';

export const ContainerNav = styled.aside`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  background-color: ${tokens.colors.color1};
  padding: 0 20px;
  
`;

export const UlNav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  
`;

export const Containerlogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
