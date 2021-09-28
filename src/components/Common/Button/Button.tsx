import { ButtonContainer } from "./buttonStyles";

interface ButtonProps {
  onClick?: (e?: any) => void;
  style?: any;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, style }) => {
  return (
    <ButtonContainer style={style} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
