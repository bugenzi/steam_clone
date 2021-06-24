import styled from "styled-components";


export const SideMenuWrapper = styled.div`
position: absolute;
left: 8%;
top: 75%;
width: 300px;
z-index: 3;
@media (max-width: 968px) {
      display: none;
}
@media (max-width: 1768px) {
      display: none;
}
`
export const SideMenuImage = styled.img`
    width: 100%;
    margin-bottom: 10px;
    width: 80%;
`
export const SideMenuHeader = styled.h2`
color: #c6d4df;
font-size: 15px;
`
export const SideMenuContainer = styled.ul`
display: flex;
flex-direction: column;
margin: 6% 0;
`
export const SideMenuList = styled.li`
color:#567d94;
list-style: none;
margin: 5px 0;
cursor: pointer;
`


export const MainWrapper = styled.div`
  background: #1b2838;
   width: 100%;
   color:#b8b6b4;
   display: flex;
 height: 100vh;
   
`;