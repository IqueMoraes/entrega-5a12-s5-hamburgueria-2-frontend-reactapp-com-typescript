import { StyledButton, FormStyledButton } from "./style";

interface ButtonsProps {
  rest?: any;
  medium?: boolean;
  menuCard?: boolean;
  onClick?: () => void;
  children: string;
  style?: {}
}

export const Buttons = ({
  children,
  medium,
  menuCard,
  onClick,
  ...rest
}: 
ButtonsProps) => {
  return (
    <StyledButton
      medium
      menuCard
      onClick={onClick}
        {...rest}
    >
      {children}
    </StyledButton>
  );
};


export const FormsButton = ({
  onClick, children
}:ButtonsProps) => {
return (
  <FormStyledButton onClick={onClick}>{children}</FormStyledButton>
)
}
