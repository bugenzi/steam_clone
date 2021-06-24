import {SpecialFooter,SpecialOffectContainer} from './style/specialCard2'
import PriceComponent from './price'
type Props= {
    img:string,
    price:string,
    discount:string
}
export default function specialCard2({img,price,discount}:Props) {
    return (
        <SpecialOffectContainer url={img}>
        <SpecialFooter>
            <div
            ><h3>Midweek madness</h3>
            <p>Offer ends 24 Jun @ 6:54pm.</p>
             </div>
             <PriceComponent discount={discount} mainPrice={price}/> </SpecialFooter>

        </SpecialOffectContainer>
    )
}
