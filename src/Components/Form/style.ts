import styled from "styled-components";

interface formButton {
  type: any;
}

export const FormContainer = styled.form`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  > p {
    width: 100%;
    padding: 0 63px;
    font-size: 14px;
    font-family: Inter, sans-serif;
    font-weight: 400;
    line-height: 22px;
    color: #828282;
    text-align: center;

    > span {
      font-weight: 500;
      color: black;
    }
    }
`;

export const FormInput = styled.div`
height: 85px;
width: 100%;
margin-bottom: 15px;

  > input {
  width: 100%;
  height: 60px;
  border-radius: 8px;
  padding: 20px 15px;
  margin-bottom: 9px;
  background-color: #ffffff;
  color: #333333;
  font-size: 16px;
  font-weight: 400;
  font-family: Inter, sans-serif;
  border: none;
  box-sizing: border-box;
    &::placeholder {
      background-color: #f5f5f5;
      color: #999999;
      border: none;
    }
    :required,
    :invalid {
      border: 2px solid #e60000;
    }
    
    :focus{
        border: 2px solid yellow;
    }
    :active {
      border: 2px solid #168821;
    }
}

  >p.alert{
      font-family: Inter, sans-serif;
      font-weight: 400;
      font-size: 12px;
      color: #e60000;
      height: 16px;

  }
`;

export const FormButton = styled.button<formButton> `
  width: 100%;
  height: 60px;
  border-radius: 8px;
  padding: 0 20px;
  background-color: #27ae60;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
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

