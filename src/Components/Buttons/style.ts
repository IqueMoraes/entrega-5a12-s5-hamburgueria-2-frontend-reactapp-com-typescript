import styled from "styled-components";

interface StyledButtonProps {
  menuCard: boolean;
  medium: boolean;
  // focus: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  width: ${(props) => (props.menuCard ? "130px" : "100%")};
  height: ${(props) => (props.medium ? "40px" : "60px")};
  border-radius: 8px;
  padding: 0 20px;
  background-color: #e0e0e0;
  color: #828282;
  border: none;

  :hover {
    background-color: #828282;
    color: #e0e0e0;
  }

  :focus {
    background-color: #27ae60;
    color: #ffffff;
    :hover {
      background-color: #93d7af;
    }
  }
`;

export const FormStyledButton = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  padding: 0 20px;
  background-color: #27ae60;
  color: #ffffff;
  border: none;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter, sans-serif;
  &:hover {
    background-color: #93d7af;
  }
`;
