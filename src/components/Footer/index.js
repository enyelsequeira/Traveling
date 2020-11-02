import React from "react"
import {
  FooterSection,
  Container,
  Top,
  Bottom,
  TopText,
  Social,
  ContactUs,
  Copyright,
  SocialLink
} from "./styles/Footer"

const Footer = ({children, ...restProps}) => {
  return <FooterSection {...restProps}> {children}</FooterSection>
}

Footer.Container = function FooterContainer({children, ...restProps}){
  return <Container {...restProps}>{children}</Container>
}
Footer.Top = function FooterTop({children, ...restProps}){
  return <Top {...restProps}>{children}</Top>
}
Footer.TopText = function FooterTopText({children, ...restProps}){
  return <TopText {...restProps}>{children}</TopText>
}


Footer.Bottom= function FooterBottom({children, ...restProps}){
  return <Bottom
    {...restProps}>{children}</Bottom>
}

Footer.Social = function FooterSocial({children, ...restProps}){
  return <Social {...restProps}>{children}</Social>
}
Footer.SocialLink = function FooterSocialLink({children, ...restProps}){
  return <SocialLink {...restProps}>{children}</SocialLink>
}
Footer.ContactUs = function FooterContactUs({children, ...restProps}){
  return <ContactUs {...restProps}>{children}</ContactUs>
}
Footer.Copyright = function FooterCopyright({children, ...restProps}){
  return <Copyright {...restProps}>{children}</Copyright>
}
export default Footer
