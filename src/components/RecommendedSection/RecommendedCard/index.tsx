
import { CaroselWrapper, CaroselSectionLeft, CaroselSectionRight, CaroselImages, CaroselImageSection, CaroselRightHeader,CaroselRightFooter ,MainRecImage} from '../style/carosel'
import SteamLogo from '../../../assets/img/icon_platform_linux.png'
import SteamPrice from '../../common/price'
import { useState } from 'react'
type Props={
    MainCover:string,
    S1:string,
    S2:string,
    S3:string,
    S4:string,
    name:string,
    discount:string,
    mainPrice:string,
}

export default function RecCard(props:Props) {
    const {MainCover,S1,S2,S3,S4,name}=props
    const {mainPrice,discount}=props
    const [url, seturl] = useState(MainCover)
    return (
        <>
              <CaroselWrapper>
                <CaroselSectionLeft url={url}>
                </CaroselSectionLeft>
                <CaroselSectionRight>
                    <CaroselRightHeader>
                        <h3>{name}</h3>

                    </CaroselRightHeader>
                    <CaroselImageSection   >
                        <CaroselImages  
                        onMouseEnter={()=>{seturl(S1)}} 
                        onMouseLeave={()=>{seturl(MainCover)}}
                        ss={S1}  />
                        <CaroselImages 
                         onMouseEnter={()=>{seturl(S2)}} 
                         onMouseLeave={()=>{seturl(MainCover)}}
                        ss={S2}  />
                        <CaroselImages 
                         onMouseEnter={()=>{seturl(S3)}} 
                         onMouseLeave={()=>{seturl(MainCover)}}
                        ss={S3}  />
                        <CaroselImages  
                         onMouseEnter={()=>{seturl(S4)}} 
                         onMouseLeave={()=>{seturl(MainCover)}}
                        ss={S4} />

                    </CaroselImageSection>
                    <CaroselRightHeader>
                        <h4>Weekend deal</h4>

                    </CaroselRightHeader>
                    <CaroselRightFooter>
                        <SteamPrice discount={discount} mainPrice={mainPrice}/>
                    
                        <img src={SteamLogo} alt="" />
                    </CaroselRightFooter>

                </CaroselSectionRight>

            </CaroselWrapper>    
        </>
    )
}
