import {SideMenuWrapper,SideMenuContainer,SideMenuHeader,SideMenuList,SideMenuImage} from './style'

export default function SideMenu() {
    return (
        <SideMenuWrapper>
            <SideMenuImage src={require("../../assets/img/side_nav_icon.png").default}/>
            <SideMenuContainer>
                <SideMenuHeader>GIFT CARDS</SideMenuHeader>
                <SideMenuList>Now Available on Steam</SideMenuList>
            </SideMenuContainer>
            <SideMenuContainer>
                <SideMenuHeader>Recommended</SideMenuHeader>
                <SideMenuList>By Friends</SideMenuList>
                <SideMenuList>By Curators</SideMenuList>
                <SideMenuList>Tags</SideMenuList>
            </SideMenuContainer>
            <SideMenuContainer>
                <SideMenuHeader>DISCOVERY QUEUES</SideMenuHeader>
                <SideMenuList>Top Sellers</SideMenuList>
                <SideMenuList>New Releases</SideMenuList>
                <SideMenuList>Upcoming</SideMenuList>
                <SideMenuList>Specials</SideMenuList>
                <SideMenuList>Virtual Reality</SideMenuList>
                <SideMenuList>Controller Friendly</SideMenuList>
            </SideMenuContainer>
            <SideMenuContainer>
                <SideMenuHeader>BROWSE BY GENRE </SideMenuHeader>
                <SideMenuList>Freee To Play</SideMenuList>
                <SideMenuList>Early Access</SideMenuList>
                <SideMenuList>Action</SideMenuList>
                <SideMenuList>Adventure</SideMenuList>
                <SideMenuList>Casual</SideMenuList>
                <SideMenuList>Indie</SideMenuList>
                <SideMenuList>Massively Multiplayer</SideMenuList>
                <SideMenuList>Racing</SideMenuList>
                <SideMenuList>RPG</SideMenuList>
                <SideMenuList>Simulation</SideMenuList>
                <SideMenuList>Sports</SideMenuList>
                <SideMenuList>Strategy</SideMenuList>
            </SideMenuContainer>
            <SideMenuContainer>
                <SideMenuHeader>RECENTLY VIEWED </SideMenuHeader>
                <SideMenuList>Ark Survival Evolved</SideMenuList>
 
            </SideMenuContainer>
        </SideMenuWrapper>
    )
}
