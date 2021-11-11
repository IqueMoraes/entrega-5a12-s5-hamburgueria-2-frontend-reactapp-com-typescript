import styled from "styled-components";

export const Body = styled.body`
  width: 100vw;
  padding-top: 18px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    padding-top: 5vh;
  }
`;

export const Container = styled.article`
  width: 98vw;

  display: flex;
  flex-wrap: wrap-reverse;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    max-width: 939px;
  }
`;

export const LogoContainer = styled.section`
  display: none;

  @media (min-width: 1024px) {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 82px;
    margin: 0 40px;
  }
`;
export const BagContainer = styled.div`
  width: 377px;
  height: 95px;
  margin-top: 22px;
  margin-bottom: 30px;
  padding: 18px 14px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 40px -20px #00000040;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    width: 60px;
    height: 60px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(39, 174, 96, 0.1);
    > svg {
      color: #219653;
    }
  }
  > p {
    width: 261px;
    font-size: 14px;
    font-family: Inter, sans-serif;
    font-weight: 400;
    line-height: 22px;
    color: #828282;

    > span {
      font-weight: 500;
      color: black;
    }
  }
`;

export const RegisterForm = styled.main`
  height: 527px;
  width: 500px;
  border: 2px solid #f5f5f5;
  border-radius: 5px;
  padding: 33px 18px 28px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  
  h3 {
    color: #333333;
    width: 50%;
  }

  h5 {
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #828282;
    cursor: pointer;
    &:hover {
      text-decoration: underline solid #828282;
    }
  }
`;
