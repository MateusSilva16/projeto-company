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
