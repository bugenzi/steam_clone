import {useRef, useState} from 'react'


import { MainWrapper, InnerWrapper, DropdownContent1, DropdownContent2, DropdownLiElement1, DropdownLiElement2, GreenButton, LiElement, MainContainer, MiscButton, MiscContainer, UlElement, } from './style'
// import { useOnClickOutside } from '../../utils/hooks';

import {Burger,SideMenu} from './Hamburger'
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    // const node = useRef();
    // useOnClickOutside(node,()=>setIsOpen(false))
    return (
        <MainWrapper>

            <InnerWrapper>
            <SideMenu open={isOpen}/>
                <MainContainer>
                 <Burger open={isOpen} setOpen={setIsOpen}/>
             
                    <img src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016%22" alt="" />
                    <UlElement>
                        <DropdownLiElement1>Store</DropdownLiElement1>
                        <DropdownLiElement2>Community</DropdownLiElement2>
                        <LiElement>About</LiElement>
                        <LiElement>Support</LiElement>

                        <DropdownContent1>
                            <LiElement>Home</LiElement>
                            <LiElement>Discovery queue</LiElement>
                            <LiElement>Whishlist</LiElement>
                            <LiElement>Points shop</LiElement>
                            <LiElement>News</LiElement>
                            <LiElement>Stats</LiElement>
                        </DropdownContent1>

                        <DropdownContent2>
                            <LiElement>Home</LiElement>
                            <LiElement>Discussion</LiElement>
                            <LiElement>Workshop</LiElement>
                            <LiElement>Market</LiElement>
                            <LiElement>Broadcast</LiElement>
                        </DropdownContent2>
                    </UlElement>
                </MainContainer>


                <MiscContainer>
                    <GreenButton>
                        <img src="https://store.akamai.steamstatic.com/public/shared/images/header/btn_header_installsteam_download.png?v=1" alt="" /> Install Steam</GreenButton>


                    <MiscButton>login</MiscButton>
                   
                    <MiscButton> languge</MiscButton>

                </MiscContainer>
            </InnerWrapper>
        </MainWrapper>
    )
}

