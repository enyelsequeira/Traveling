import React from "react"
import {
  PartnerSection,
  Container,
  Bottom,
  Top,
  TopTitle,
  TopSub,
  BottomTitle,
  BoldText
} from "./styles/travelPartnerHero"

const TravelPartner = ({children, ...restProps}) => {
  return <PartnerSection {...restProps}>{children}</PartnerSection>
}
TravelPartner.Container  = function TravelContainer({children, ...restProps}){
  return <Container {...restProps}>{children}</Container>
}

TravelPartner.Top = function TravelPartnerTop({children, ...restProps}){
  return <Top {...restProps}>{children}</Top>
}
TravelPartner.TopTitle = function TravelPartnerTopTitle({children, ...restProps}){
  return <TopTitle {...restProps}>{children}</TopTitle>
}
TravelPartner.TopSub = function TravelPartnerTopSubTitle({children, ...restProps}){
  return <TopSub {...restProps}>{children}</TopSub>
}

TravelPartner.Bottom = function TravelPartnerBottom({children, ...restProps}){
  return <Bottom {...restProps}>{children}</Bottom>
}
TravelPartner.BottomTitle = function TravelPartnerBottomTitle({children, ...restProps}){
  return <BottomTitle {...restProps}>{children}</BottomTitle>
}
TravelPartner.BoldText = function TravelPartnerBoldText({children, ...restProps}){
  return <BoldText {...restProps}>{children}</BoldText>
}



export default TravelPartner