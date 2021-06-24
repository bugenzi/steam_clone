import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import RecommendedCard from '../RecommendedCard'

import React from 'react'
type Props = {
    interval:number
    children?: JSX.Element | JSX.Element[];
};

export default function CarosellSection({children,interval}:Props) {
    const mapChildren = React.Children.map(children, (tread) => tread);

    

    return (
        
     <Carousel 
    //  autoPlay 
    //  infiniteLoop 
    //  interval={interval||9000}
      >
         
         
        {mapChildren}
       
     </Carousel>
     )
}


