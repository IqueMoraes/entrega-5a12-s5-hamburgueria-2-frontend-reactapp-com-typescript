import styled from "styled-components";

export const ContainerDots = styled.div ` 
margin: 0;
padding: 0;
box-sizing: border-box;
>ul{
    display: flex;
    padding: 0;
    >li{
        list-style: none;
        padding: 0;
    }
    >li+li{
        margin-left: 23px;
    }
}
>ul+ul{
    margin-top: 23px;
}
`

export const GrayBall = styled.div `
width: 10px;
height: 10px;
background-color: #F2F2F2;
border-radius: 50%;
`