import styled from "styled-components";


export const CardContainer = styled.div ` 
width: 300px;
height: 346px;
border: 2px solid #E0E0E0;

header{
    height: 150px;
}

div{
    padding-top: 27px 21px 23px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    >h3{
        color: #333333;
        font-weight: 700;
        height: 40px;
    }
    >h4{
        font-weight: 400;
        font-size: 12px;
        margin-bottom: 14px;
        color: #828282;
    }
    >h4{
        font-weight: 600;
        color: #27AE60;
        margin-bottom: 14px;
    }
}

:focus{
    border: 2px solid #27AE60;
}
`