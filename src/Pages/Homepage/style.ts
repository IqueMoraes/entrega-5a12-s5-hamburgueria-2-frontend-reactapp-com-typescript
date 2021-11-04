import styled from "styled-components";

export const Header = styled.header`
  height: 80px;
  width: 100vw;
  background-color: #f5f5f5;
  padding: 15px 18px 25px 10px;
  display: flex;
  justify-content: space-between;
  h1 {
    color: #333333;
  }
  
`;


export const CartButton = styled.div `
    position: relative;
    height: 40px;
    width: 36px;
    cursor: pointer;
    

    h3{
        position: absolute;
        top: 0;
        right: 0;
        height: 24px;
        border-radius: 7px;
        background-color: #27AE60;
        color: #ffffff;
        font-weight: 900;
        font-size:14px;
        text-align: center;
    }

`