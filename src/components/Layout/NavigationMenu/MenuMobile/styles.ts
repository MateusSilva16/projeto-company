import styled from 'styled-components';
import tokens from '../../../../utils/tokens';

export const ContainerNav = styled.aside`
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: ${tokens.colors.color1};
  padding: 0 10px;
`;

export const UlNav = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 3em 0;
  width: 90%;
`;

export const Containerlogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  width: 100%;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${tokens.colors.color4};
  font-size: 18px;
  text-transform: uppercase;
  padding: 10px;
`;

export const MenuHanburguer = styled.div<{ openMenu?: boolean }>`
  display: ${(props: any) => (props.openMenu ? 'flex' : 'none')};
  justify-content: start;
  align-items: center;
  flex-direction: column;
  color: ${tokens.colors.color4};
  position: fixed;
  height: 100vh;
  width: 200px;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 7em 0;
  background-color: ${tokens.colors.color1};
  transform: display 1s;
`;

export const Overlay = styled.div<{ openMenu?: boolean }>`
  display: ${(props: any) => (props.openMenu ? 'flex' : 'none')};
  color: ${tokens.colors.color4};
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ButtonMenu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${tokens.colors.color4};
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const ButtonClose = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${tokens.colors.color4};
  position: absolute;
  top: 8px;
  right: 5px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;
