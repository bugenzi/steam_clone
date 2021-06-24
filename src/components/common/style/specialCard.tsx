import styled from "styled-components";
export const SpecialOffectContainer = styled.div`

width:  325px;
height: 300px;
img{
    width: 100px;
}
cursor: pointer;
margin: auto;

`

export const SpecialOffectImg = styled.img`
background-size: contain;
width: 300px;
height: 180px;

`
export const SpecialFooter = styled.div`

display: flex;
background: url(${require("../../../assets/img/background_spotlight.jpg").default});
height: 47px;
background-position-y: 78px;
justify-content: flex-end;
align-items: center;
padding:5px;
`