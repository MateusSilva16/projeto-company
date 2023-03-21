import { Link } from 'react-router-dom';
import { Container, Title } from './styles';

const LinkButton = ({ to, text }: any) => {
  return (
    <Link to={to}>
      <Container>{text}</Container>
    </Link>
  );
};

export default LinkButton;
