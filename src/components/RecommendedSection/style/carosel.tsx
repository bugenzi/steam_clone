import styled from "styled-components";
import {InnerWrapper} from '../../Navbar/style'

interface Props {
    url: string
 
}
interface Props2{
    ss:string
}


export const MainRecImage = styled.img`
    background-size: cover;
    height: 100%;
`
export const CaroselWrapper = styled.div`
display: flex;


`;
export const CaroselSectionLeft = styled.div<Props>`
width: 60%;
background: ${({ url }) => `url(${url})`};
background-size: cover;
transition: 0.1s ;
/* box-shadow: rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px, rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px, rgb(0 0 0 / 9%) 0px -3px 5px; */
 
    border: 1px solid black;
    @media (max-width: 968px) {

        width: 88%;
        height: 226px;

    margin: auto;
}

`;

export const CaroselImages = styled.div<Props2>`
background: ${({ ss }) => `url(${ss})`};
background-size: cover;
height: 100px;
width: 160px;
margin: 5px 10px;
cursor: pointer;



   
`;
export const CaroselSectionRight = styled.div`
background: #0a141d;
   width: 40%;
      @media (max-width: 968px) {

            display: none;
  }

  
`;
export const CaroselRightHeader = styled.div`
    padding: 10px 0;
    h1{
        color: white;
        font-size: 30px;
    }
    h4{
      text-align:start;
      
    margin: 0 10px;
    }
  

`;
export const CaroselRightFooter = styled.div`
display: flex;
justify-content: space-between;
padding: 10px;
img{
    width: 30px !important;
    margin-right: 50px;
}


`;
export const CaroselImageSection = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;

   
`;

