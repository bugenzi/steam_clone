import React from 'react'
import { MainWrapper, InnerWrapper } from './style'
// import CarosellSection from './CarosellSection'
import CarosellSection from '../common/carosel'

import RecommendedCard from '../RecommendedSection/RecommendedCard'
import * as img from '../../assets/RecommendeImages'
export default function RecommendedSection() {
    return (
        <MainWrapper>
     
            <InnerWrapper>
                <h2>FEATURED & RECOMMENDED</h2>
                <CarosellSection interval={9000}>
                    <RecommendedCard discount={"30%"} mainPrice={"12.99"} name={"ARK SURVIVAL EVOLVED"} MainCover={img.ark_background_image} S1={img.ark_s1} S2={img.ark_s2} S3={img.ark_s3} S4={img.ark_s4} />
                    <RecommendedCard discount={"60%"} mainPrice={"55.99"} name={"MASS EFFECT SPECIAL EDITION"} MainCover={img.MS_background_image} S1={img.MS_s1} S2={img.MS_s2} S3={img.MS_s3} S4={img.MS_s4} />
                    <RecommendedCard discount={"15%"} mainPrice={"40.22"} name={"BATELFIELD 5"} MainCover={img.BF5_background_image} S1={img.BF5_s1} S2={img.BF5_s2} S3={img.BF5_s3} S4={img.BF5_s4} />

                </CarosellSection>
            </InnerWrapper>

        </MainWrapper>
    )
}
