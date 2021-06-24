import React from 'react'
import Navbar from '../../components/Navbar'
import LandingPage from '../../components/LandingPage'
import RecommendedSection from '../../components/RecommendedSection'
import SpecialOffer from '../../components/SpecialOffer'
import SideMenu from '../../components/SideMenu'

export default function HomePage() {
    return (
        <>
        <Navbar/>
        <LandingPage/>
        <RecommendedSection/>
        <SideMenu/>
        <SpecialOffer/>
     
        </>
    )
}
