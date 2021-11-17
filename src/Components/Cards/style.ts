import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  height: 346px;
  border: 2px solid #e0e0e0;
  border-radius: 5px;

  header {
    height: 150px;
  }
  div.image {
    background-color: #f5f5f5;
    border-radius: 5px 5px 0 0;
    height: 150px;
  }
  div.content {
    padding: 18px 21px 18px;
    height: 196px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    > h3 {
      color: #333333;
      font-weight: 700;
      font-size: 16px;
      height: 50px;
    }
    > h5 {
      font-weight: 400;
      font-size: 12px;
      margin-bottom: 12px;
      color: #828282;
    }
    > p.price {
      font-weight: 600;
      font-size: 14px;
      color: #27ae60;
      margin-bottom: 14px;
    }
  }

  :focus {
    border: 2px solid #27ae60;
  }
`;
