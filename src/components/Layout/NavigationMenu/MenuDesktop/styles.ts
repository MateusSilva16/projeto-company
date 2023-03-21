import styled from 'styled-components';
import tokens from '../../../../utils/tokens';

export const ContainerNav = styled.aside`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 0;
  width: 100%;
  height: 50px;
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

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${tokens.colors.color4};
  font-size: 20px;
  text-transform: uppercase;
  padding-top: 5px;
  padding-left: 5px;
`;
