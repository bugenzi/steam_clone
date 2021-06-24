import styled from "styled-components";


export const MainWrapper = styled.div`
  background: #1b2838;
   width: 100%;
   color:#b8b6b4;
   display: flex;
 height: 70vh;
 position: relative;
 
   
`;
export const InnerWrapper = styled.div`

max-width: 1000px;
  width: 100%;
  margin: 0 auto;
 
   h2{
     padding: 30px;
   }
`;
export const CarosselContent = styled.div`
/* display: flex;
flex-wrap: wrap;
margin: auto; */
display: grid;
grid-template: 
            "a b c" 240px
            "a b c" 240px
;
grid-column-gap: 10px;
grid-row-gap: 10px;
height: auto

;
`
export const CarosselContentFlex = styled.div`
 display: flex;
flex-wrap: wrap;
margin: auto; 
width: 100%;


;
`
export const CarosselFlexContent = styled.div`

  display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 506px;


;
`