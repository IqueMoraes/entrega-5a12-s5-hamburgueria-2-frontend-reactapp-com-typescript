import styled from "styled-components";

export const Header = styled.header`
  height: 80px;
  width: 100vw;
  background-color: #f5f5f5;
  padding: 18px 18px 25px 10px;
  display: flex;
  justify-content: space-between;
  margin: 0;
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
export const DivButton = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 119px;
  width: 30%;
  max-width: 125px;;
  >div{
    width: 25px;
    height: 25px;
    position: relative;
    cursor: pointer;
    >svg{
      width: 100%;
      height: 100%;
      color: #BDBDBD;
    }
    h4.cart{
      background-color: #27AE60;
      color: #ffffff;
      text-align: center;
      border-radius: 7px;
      font-size: 12px;
      font-weight: 700;
      width: 18px;
      padding: 5px 0;
      position: absolute;
      top: -50%;
      right: -50%;

    }
  }
`
