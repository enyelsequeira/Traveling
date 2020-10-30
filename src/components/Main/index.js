import React from "react"
import { Container, Left, LeftImg, MainPara, MainSection, Right, RightTextSpan, RightTitle } from "./styles/Main"



const Main = ({children, ...restProps}) => {
  return (
    <MainSection {...restProps}>{children}</MainSection>
  )
}
Main.Container = function MainContainer ({children, ...restProps}){
  return (
    <Container {...restProps}>{children}</Container>
  )
}
Main.Left = function MainLeft ({children, ...restProps}){
  return (
    <Left {...restProps}>{children}</Left>
  )
}
Main.LeftImg = function MainLeftImg ({children, ...restProps}){
  return (
    <LeftImg {...restProps}>{children}</LeftImg>
  )
}
Main.Right = function MainRight ({children, ...restProps}){
  return (
    <Right {...restProps}>{children}</Right>
  )
}
Main.RightTitle = function MainRightTitle ({children, ...restProps}){
  return (
    <RightTitle {...restProps}>{children}</RightTitle>
  )
}
Main.RightPara = function MainRightPara ({children, ...restProps}){
  return (
    <MainPara {...restProps}>{children}</MainPara>
  )
}
Main.RightTextSpan = function MainRightTextSpan ({children, color,  ...restProps}){
  return (
    <RightTextSpan color={color} {...restProps}>{children}</RightTextSpan>
  )
}
//code
export default  Main