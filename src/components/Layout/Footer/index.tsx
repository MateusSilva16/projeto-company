import { Container, ContainerLinks, Copy, Links } from './styles';
import {
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from 'react-icons/ai';
const Footer = ({ children }: any) => {
  return (
    <Container>
      <ContainerLinks>
        <Links>
          <AiOutlineFacebook size={30} />
        </Links>
        <Links href="https://www.linkedin.com/in/mateus-oliveira-a26b69246/" target="_blank">
          <AiOutlineLinkedin size={30} />
        </Links>
        <Links href="https://github.com/MateusSilva16" target="_blank">
          <AiOutlineGithub size={30} />
        </Links>
      </ContainerLinks>
      <Copy>Desenvolvido por Mateus Silva &copy; 2023</Copy>
    </Container>
  );
};

export default Footer;
