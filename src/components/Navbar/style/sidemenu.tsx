
import styled from "styled-components";
interface Props {
open:boolean
  }
  
export const StyledMenu = styled.nav<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  visibility: hidden;
  background: #171a21;
  height: 100vh;
  width: 50%;
  z-index: 30;

  @media (max-width: 968px) {
    visibility: visible;
   
   
  }
  
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
 
    text-decoration: none;
    transition: color 0.3s linear;
    
 
 
  }
`;
export const StyledLi = styled.nav`
font-size: 1rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
 
    text-decoration: none;
    transition: color 0.3s linear;
    color:#d2d2d2
`;