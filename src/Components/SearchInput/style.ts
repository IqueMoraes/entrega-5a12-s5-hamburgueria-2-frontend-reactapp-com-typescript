import styled from "styled-components";

export const SearchContainer = styled.div`
  width: auto;
  height: auto;
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  :focus-within {
    position: absolute;
    top: 10;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    height: 60px;
    border: 2px solid #333333;
    border-radius: 8px;
    padding: 0, 10px, 0, 20px;
    background-color: #f5f5f5;
  }
  @media screen and (min-width: 1024px) {
    width: 365px;
    height: 60px;
    position: static;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    padding: 0, 10px, 0, 20px;
    border: 2px solid #e0e0e0;
    background-color: #f5f5f5;
    :focus-within {
      border: 2px solid #333333;
    }
  }
`;

export const StyledSearchInput = styled.input`
  margin: 0;
  height: 35px;
  display: hidden;

  :focus {
    display: flex;
    align-items: center;
    width: 290px;
    height: 35px;
    display: flex;
    align-items: center;
    color: #828282;
    font-size: 16px;
    font-family: Inter, sans-serif;
  }
  @media screen and (min-width: 1024px) {
    width: 290px;
    height: 35px;
    display: flex;
    align-items: center;
    color: #828282;
    border: none;
    font-size: 16px;
    font-family: Inter, sans-serif;

    ::placeholder {
      color: #e0e0e0;
      font-size: 16px;
      font-family: Inter, sans-serif;
    }
  }
`;

export const SearchButton = styled.button `
    width: 25px;
    height: 25px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        height: 100%;
        color: #BDBDBD;
    }

    :focus{
        width: 54px;
        height: 40px;
        background-color: #27AE60;
        svg{
            height: 16px;
            color: white;

        }
    }
`