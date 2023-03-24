import tokens from '@/utils/tokens';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  color: ${tokens.colors.color4};
  background-color: #222;
  width: 60%;
  height: 60%;
  position: relative;
`;
