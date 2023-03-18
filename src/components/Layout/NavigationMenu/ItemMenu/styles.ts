import styled from 'styled-components';
import tokens from '../../../../utils/tokens';

export const LiItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
  padding: 10px;
  &:hover {
    border-bottom: 2px solid ${tokens.colors.color3};
  }
`;

export const ContainerText = styled.h5`
  margin: 0px;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 300;
  color: ${tokens.colors.color4};
  font-family: Arial, Helvetica, sans-serif;
`;
