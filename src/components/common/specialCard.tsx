import {SpecialOffectContainer,SpecialOffectImg,SpecialFooter} from "./style/specialCard"
import HoverdCard from "./hoverdCard";
import PriceCommponet from "./price";

type Props= {
    img:string,
    price:string,
    discount:string
}
export default function SpecialOffer({img,price,discount}:Props) {
    return (
        <SpecialOffectContainer>
        <SpecialOffectImg src={img} alt=""/>
        <SpecialFooter> <PriceCommponet discount={discount} mainPrice={price}/> </SpecialFooter>

        </SpecialOffectContainer>
    )
}
