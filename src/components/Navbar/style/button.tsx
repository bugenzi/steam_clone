import styled from 'styled-components';
interface Props {
    open:boolean
      }
      
export const StyledBurger = styled.button<Props>`
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: 37%;
left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 76px;
  height: 37px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  visibility: hidden;
  z-index: 30;
  @media (max-width: 968px) {
    visibility: visible;
   
   
  }
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 38px;
    height:5px;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    background-color: #d2d2d2;
    transform-origin: 1px;

    
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  


`;