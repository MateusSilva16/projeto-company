import styled from 'styled-components';

export const Container = styled.div<{
  types?: boolean;
}>`
  width: 20%;
  padding: 1em;
  border: 1px solid #000;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 2em;
  border-radius: 5px;
  position: absolute;
  top: 60px;
  right: 20px;
  

  color: ${(props: any) => (props.types ? 'green' : 'red ')};

  background-color: ${(props: any) => (props.types ? ' #d4edda ' : '#f8d7da ')};

  border-color: ${(props: any) => (props.types ? '#c3e6cb ' : ' #f5c6cb')};
`;
