import React from "react"
import {
  HeaderSection,
  Container, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, PageLink

} from "./styles/Header"

const Header = ({ children, active, ...restProps }) => {
  return (
    <HeaderSection{...restProps} active>{children}</HeaderSection>
  )
}

Header.Container = function HeaderContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}
Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return <NavLogo {...restProps}>{children}</NavLogo>
}

Header.Icon = function HeaderIcon({children, ...restProps }){
  return <NavIcon {...restProps}>{children}</NavIcon>
}
Header.MobileIcon = function HeaderMobileIcon({children, ...restProps }){
  return <MobileIcon {...restProps}>{children}</MobileIcon>
}
Header.NavMenu = function HeaderNavMenu({children, ...restProps }){
  return <NavMenu {...restProps}>{children}</NavMenu>
}
Header.NavItem = function HeaderNavItem({children, ...restProps }){
  return <NavItem {...restProps}>{children}</NavItem>
}
Header.NavLinks = function HeaderNavLinks({children, ...restProps }){
  return <NavLinks {...restProps}>{children}</NavLinks>
}
Header.PageLink = function HeaderPageLink({children, ...restProps}){
  return <PageLink {...restProps}>{children}</PageLink>
}
// todo will try and see if i need this
// Header.Pane = function HeaderPane({ children, ...restProps }) {
//   return <Pane {...restProps}>{children}</Pane>;
// };


export default Header
