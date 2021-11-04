import { StyledButton } from "./style"

interface ButtonsProps{
    children: string;
    rest?: any;
    medium: boolean;
    menuCard: boolean;
    onClick: () => void;
}


export const Buttons = ({children, medium, menuCard, onClick, ...rest}: ButtonsProps) => {
    return(
        <StyledButton  medium={medium}  menuCard={menuCard} onClick={onClick} {...rest}>{children}</StyledButton>
    )
}