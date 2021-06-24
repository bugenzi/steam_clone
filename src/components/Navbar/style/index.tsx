

import styled from "styled-components";




export const MainWrapper = styled.div`
  background: #171a21;
   width: 100%;
   color:#b8b6b4;
   display: flex;
 
   
`;
export const InnerWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  background: #171a21;
`
export const MainContainer = styled.div`
    display: flex;
    padding-bottom: 30px;
    padding-top: 30px;
    padding-left: 50px;
    min-height: 80px;
   img{
       width: 200px;
   }

   @media (max-width: 968px) {
    padding-left: 0;
    li{
        display: none;
    }
    img{
        width: 150px;
    margin: auto;
    }
  }

   
`;

export const MiscContainer = styled.div`
padding: 3px;
padding: 3px;
    position: absolute;
    top: 0;
    right: 44px;

    display: flex;
    span{
        align-self: center;
        
    }

    @media (max-width: 968px) {
        display: none;
  }

`;

export const UlElement = styled.ul`
list-style: none;
font-weight: bold;
display: flex;
align-self: center;

   
`;

export const LiElement = styled.li`
margin-left: 7px;
margin-right: 7px;
cursor: pointer;
:hover{
    color: white;
  
}
   
`;

export const DropdownContent1 = styled.div`
position: absolute;
background-color:#171a21 ;
z-index: 30;
visibility: hidden;
top: 65px;
li{
    margin:10px 10px
}
:hover {
      visibility: visible;
    }
`

export const DropdownLiElement1 = styled.li`
margin-left: 7px;
margin-right: 7px;
cursor: pointer;
&:hover ~ ${DropdownContent1} {
   visibility:visible
  }


   
`;

export const DropdownContent2 = styled.div`
position: absolute;
background-color:#171a21 ;
visibility: hidden;
z-index: 30;


top: 65px;
right: 593px;
li{
    margin:10px 10px
}
:hover {
      visibility: visible;
    }
`

export const DropdownLiElement2 = styled.li`
margin-left: 7px;
margin-right: 7px;
cursor: pointer;
&:hover ~ ${DropdownContent2} {
   visibility:visible
  }


   
`;
export const GreenButton = styled.div`
padding: 5px;
    width: 117px;
    font-size: 14px;
   background: #5c7e10;
   color:#ffffff;
img{
    margin-right: 10px;
}
`;

export const MiscButton = styled.span`
    font-size: 12px;
    color:#b8b6b4;
    margin: 0 5px;

`