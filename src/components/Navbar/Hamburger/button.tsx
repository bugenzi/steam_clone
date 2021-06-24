import { StyledBurger } from '../style/button'


type Props = {
    open: boolean;
    setOpen:Function
  };
  const Burger: React.FC<Props> = ({  open,setOpen, }) => (
    <>
               <StyledBurger open={open} onClick={()=>setOpen(!open)}>
                 <div />
                   <div />
                  <div />
               </StyledBurger>
          </>
  );
export default Burger