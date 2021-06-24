
import { InnerWrapper, MainWrapper, CarosselContent, CarosselFlexContent,CarosselContentFlex } from './style'
import CaroselSection from '../common/carosel'
import SpecialCard from '../common/specialCard'
import SPecialCard2 from '../common/specialCard2'
import * as img from "../../assets/RecommendeImages"
import useDeviceDetect from '../../utils/mobileDetect'

export default function SpecialOffer() {
    const { isMobile } = useDeviceDetect();

    if(isMobile){
        return (   <MainWrapper>
            <InnerWrapper>
                <h2>Special Offer</h2>
                <CaroselSection interval={7000}>
               


                        <SpecialCard price={"30.00"} discount={"40%"} img={img.ark_background_image} />
                        <SpecialCard price={"30.00"} discount={"40%"} img={img.BF5_background_image} />
                        <SpecialCard price={"30.00"} discount={"40%"} img={img.BF5_background_image} />

                




                    


                </CaroselSection>
            </InnerWrapper>
        </MainWrapper>)
    }
    return (
        <MainWrapper>
            <InnerWrapper>
                <h2>Special Offer</h2>
                <CaroselSection interval={7000}>
               



                    <CarosselContent>
                    <SPecialCard2 price={"30.00"} discount={"40%"} img={img.MS_background_image} />
                        <SpecialCard price={"30.00"} discount={"40%"} img={img.MS_background_image} />
                        <SpecialCard price={"30.00"} discount={"40%"} img={img.MS_background_image} />
                        <SpecialCard price={"30.00"} discount={"40%"} img={img.MS_background_image} />
                        <SpecialCard price={"30.00"} discount={"40%"} img={img.MS_background_image} />
                        <SpecialCard price={"30.00"} discount={"40%"} img={img.MS_background_image} />

                    </CarosselContent>



                    <CarosselContent>

                        <SPecialCard2 price={"30.00"} discount={"40%"} img={img.MS_background_image} />
                        <SPecialCard2 price={"30.00"} discount={"40%"} img={img.BF5_background_image} />
                        <CarosselFlexContent>
                            <SpecialCard price={"30.00"} discount={"40%"} img={img.ark_background_image} />
                            <SpecialCard price={"30.00"} discount={"40%"} img={img.BF5_background_image} />
                        </CarosselFlexContent>


                    </CarosselContent>

                    <CarosselContent>
                        <SpecialCard price={"30.00"} discount={"40%"} img={img.ark_background_image} />
                        <SpecialCard price={"30.00"} discount={"40%"} img={img.BF5_background_image} />
                        <SpecialCard price={"30.00"} discount={"40%"} img={img.MS_background_image} />
                        <SpecialCard price={"30.00"} discount={"40%"} img={img.BF5_background_image} />
                        <SpecialCard price={"30.00"} discount={"40%"} img={img.MS_background_image} />
                        <SpecialCard price={"30.00"} discount={"40%"} img={img.ark_background_image} />
                     

                    </CarosselContent>


                </CaroselSection>
            </InnerWrapper>
        </MainWrapper>
    )
}
