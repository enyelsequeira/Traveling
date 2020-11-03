import React from "react"
import { CardsContainer, CardsImage, CardsImageContainer, CardsTitle } from "./styles/homeCards"

const HomeCards = ({children, ...restProps}) =>{
  return <CardsContainer {...restProps}>{children}</CardsContainer>
}

HomeCards.CardsImage = function HomeCardsImage({children,...restProps}){
  return <CardsImage   {...restProps}>{children}</CardsImage>
}
HomeCards.CardsTitle = function HomeCardsTitle({children, ...restProps}){
  return <CardsTitle {...restProps}>{children}</CardsTitle>
}
HomeCards.CardsImageContainer = function HomeCardsImageContainer({children, ...restProps}){
  return <CardsImageContainer {...restProps}>{children}</CardsImageContainer>
}
export default  HomeCards