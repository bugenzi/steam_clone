

import styled from "styled-components";




export const StoreNavContainer = styled.div`
background-color: #3b628f;
display: flex;
padding: 10px;
justify-content: space-between;
@media (max-width: 968px) {
    flex-direction:column;
    height: 300px;
    input{
        width: 100%;
    }
    a{
        align-self: auto;
        margin-left: 30px;
        padding: 10px 0 ;
    }
  }

`;
export const NavbarText = styled.a`
cursor: pointer;
color: white;
position: relative;
align-self: center;

`;
export const NavbarTextIcon = styled.img`
position: absolute;
    top: 4;
    top: 11%;
    left: -28px;
    height: 30px;
    width: 30px;
`;

export const NavbarInput = styled.input`
color: black;
background-color:#316282;
border-color: #344855;
border-radius: 5px;
text-shadow:  1px 1px 0px rgb(255 255 255 / 10%);;

input[type=submit]{
background-color:#316282;
}

`;

export const SubmitIcon = styled.input`

color: white;
input{
background-color: green;
}

`;
