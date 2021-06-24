
import { StoreNavContainer, NavbarText, NavbarInput,NavbarTextIcon } from '../style/StoreNav'

export default function StoreNav() {
    return (
        <>
            <StoreNavContainer>

                <NavbarText>Your store </NavbarText>
                <NavbarText><NavbarTextIcon src="https://store.akamai.steamstatic.com/public/images/v6/storemenu/new_white.svg?v=2https://store.akamai.steamstatic.com/public/images/v6/storemenu/new_white.svg?v=2" alt="" />New and noteworthy </NavbarText>
                <NavbarText><NavbarTextIcon src="https://store.akamai.steamstatic.com/public/images/v6/storemenu/new_white.svg?v=2https://store.akamai.steamstatic.com/public/images/v6/storemenu/new_white.svg?v=2" alt="" />
                    Categories </NavbarText>
                <NavbarText>Points shop </NavbarText>
                <NavbarText>News </NavbarText>
                <NavbarText>Labs </NavbarText>

                <div style={{ display: 'flex' }}>
                    <NavbarInput placeholder="search" type="search" />

                    <img src="	https://store.akamai.steamstatic.com/public/images/v6/search_icon_btn.png" alt="" />

                </div>
            </StoreNavContainer>
        </>
    )
}
