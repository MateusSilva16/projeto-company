import { ButtonCustom } from './styles';

const Button = ({ action, text, icon, width, height, justifyContent }: any) => {
  return (
    <ButtonCustom
      onClick={action}
      height={height}
      width={width}
      justifyContent={justifyContent}
    >
      <div>{icon ?? null}</div>
      <p> {text ?? null}</p>
    </ButtonCustom>
  );
};

export default Button;
