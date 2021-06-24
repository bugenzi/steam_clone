import styled from "styled-components";
interface Props {
    url: string
 
}
export const SpecialOffectContainer = styled.div<Props>`

width:  325px;
height: 480px;

background: ${({ url }) => `url(${url})`};
background-size: cover;
position: relative;
background-position-x: 50%;
cursor: pointer;
`


export const SpecialFooter = styled.div`
display: flex;
background: url(${require("../../../assets/img/background_spotlight.jpg").default});

height: 120px;
    background-position-y: 124px;
justify-content: flex-end;
align-items: center;
padding:5px;
position: absolute;
bottom: 0;
width: 100%;
flex-wrap:wrap;
div{
    text-align: center;
  
    width:100%;
    h3{
        color: white;
        margin: 0 10px;
        font-size: 18px;
        margin: 10px ;
    }
    p{
        color:#acdbf5;
        font-size: 15px;
        margin: 10px ;
    }
}

`