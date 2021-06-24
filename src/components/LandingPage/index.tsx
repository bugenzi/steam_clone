
import { MainWrapper, InnerWrapper, MobileImage } from './style'
import StoreNav from './StoreNav'

// import Sample from "../../assets/img/webm_page_bg_english.webm"
export default function LandingPage() {
    return (
        <MainWrapper>
            <InnerWrapper>
                <StoreNav />
                <MobileImage />
            </InnerWrapper>
        </MainWrapper>
    )
}
