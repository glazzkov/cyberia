import { StyledButton } from './Button.style';

export const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      <span>{children}</span>
    </StyledButton>
  );
};
