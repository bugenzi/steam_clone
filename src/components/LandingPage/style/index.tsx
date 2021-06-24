

import styled from "styled-components";
import banner from "../../../assets/img/lading_page.gif"



export const MainWrapper = styled.div`
padding-top: 50px;
height: 43vh;
background: url(${banner});
background-size: cover;
@media (max-width: 968px) {
   padding-top: 0;
   height: auto;
  }

`;
export const InnerWrapper = styled.div`



background-size: cover;
max-width: 1000px;
  width: 100%;
  margin: auto;

`;
export const MobileImage = styled.div`
visibility: hidden;
background: url(${banner});
background-position-x: center;
    background-position: center;
    
@media (max-width: 968px) {
   visibility: visible;
   background-size: cover;
   height: 46vh;

  }
`;
