import React from "react"
import { CardsContainer, CardsImage, CardsImageContainer, CardsTitle } from "./styles/homeCards"

const SmallCards = ({children, ...restProps}) =>{
  return <CardsContainer {...restProps}>{children}</CardsContainer>
}

SmallCards.CardsImage = function SmallCardsImage({children,...restProps}){
  return <CardsImage   {...restProps}>{children}</CardsImage>
}
SmallCards.CardsTitle = function SmallCardsTitle({children, ...restProps}){
  return <CardsTitle {...restProps}>{children}</CardsTitle>
}
SmallCards.CardsImageContainer = function SmallCardsImageContainer({children, ...restProps}){
  return <CardsImageContainer {...restProps}>{children}</CardsImageContainer>
}
export default  SmallCards