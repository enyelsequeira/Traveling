import React from "react"
import {
    Container,
    HeroSection,
    Left,
    LeftParagraph,
    LeftText,
    LeftTextColor,
    LeftTextName,
    Right,
    RightImage
} from "./styles/Hero"

const Hero = ({children, ...restProps}) => {
    return (
      <HeroSection {...restProps}>{children}</HeroSection>
    )
}

Hero.Container = function HeroContainer ({children, ...restProps}){
    return (
      <Container {...restProps}>{children}</Container>
    )
}

Hero.Left = function HeroLeft ({children, ...restProps}){
    return (
      <Left {...restProps}>{children}</Left>
    )
}
Hero.LeftText = function HeroLeftText ({children, ...restProps}){
    return (
      <LeftText {...restProps}>{children}</LeftText>
    )
}
Hero.LeftTextColor = function HeroLeftTextColor ({children, color, ...restProps}){
    return (
      <LeftTextColor color={color} {...restProps} >{children}</LeftTextColor>
    )
}
Hero.LeftTextName = function HeroLeftTextName ({children, ...restProps}){
    return (
      <LeftTextName {...restProps}>{children}</LeftTextName>
    )
}
Hero.LeftParagraph = function HeroLeftParagraph ({children, ...restProps}){
    return (
      <LeftParagraph {...restProps}>{children}</LeftParagraph>
    )
}

Hero.Right = function HeroRight ({children, ...restProps}){
    return (
      <Right {...restProps}>{children}</Right>
    )
}
Hero.RightImage = function HeroRightImage ({children, ...restProps}){
    return (
      <RightImage {...restProps}>{children}</RightImage>
    )
}




export default Hero