import { Container, Content } from './styles';
import { useState } from 'react';

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default Modal;
