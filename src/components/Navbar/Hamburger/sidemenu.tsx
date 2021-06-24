import React from 'react';
import { StyledMenu ,StyledLi} from '../style/sidemenu';
type Props = {
    open: boolean;
  };
const Menu:React.FC<Props> = ({open }) => {
  return (
    <StyledMenu open={open} >
      <StyledLi>
      Login
      </StyledLi>
      <StyledLi >
       Store
        </StyledLi>
      <StyledLi >

        Community
        </StyledLi>
        <StyledLi >
 
        Support
        </StyledLi>
    </StyledMenu>
  )
}
export default Menu;