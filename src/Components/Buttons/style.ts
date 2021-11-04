import styled from "styled-components";

interface StyledButtonProps {
    menuCard: boolean;
    medium: boolean;
    // focus: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
    width: ${(props) => props.menuCard ? '130px' : '100%' };
    height: ${props=> props.medium ? '40px' : '60px'};
    border-radius: 8px;
    padding: 0 20px;
    background-color: #E0E0E0;
    color: #828282;

    :hover{
        background-color: #828282;
        color: #E0E0E0;

    }

    :focus{
        background-color: #27AE60;
        color: #ffffff;
        :hover{
           background-color: #93D7AF;
        }
    }

`