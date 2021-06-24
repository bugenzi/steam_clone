import {PriceContainer,DiscountContainer,PriceWrap} from './style/price'

type Props={
    discount:string,
    mainPrice:string
}

export default function PriceCommponet({discount,mainPrice}:Props) {
    return (
        <PriceWrap>
      
            <DiscountContainer>{discount|| "60%"}</DiscountContainer>
   
            <PriceContainer>
               {mainPrice}$
            </PriceContainer>
                
              
        </PriceWrap>
    )
}
