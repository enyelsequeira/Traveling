import React from "react"
import { Button, CardsContainer, Date, Description, Image, ImageWrapper, Title } from "./styles/Cards"

const Cards = ({children, ...restProps}) => {
  return <CardsContainer {...restProps}>{children}</CardsContainer>
}

Cards.Title = function CardsTitle ({children, ...restProps}){
 return <Title {...restProps}>{children}</Title>
}
Cards.ImageWrapper = function CardImageWrapper ({children, ...restProps}){
  return <ImageWrapper {...restProps}>{children}</ImageWrapper>
}
Cards.Image = function CardsImage ({children, ...restProps}){
 return <Image {...restProps}>{children}</Image>
}
Cards.Description = function CardsDescription ({children, ...restProps}){
 return <Description {...restProps}>{children}</Description>
}
Cards.Date = function CardsDate({children, ...restProps}){
  return <Date {...restProps}>{children}</Date>
}
Cards.Button = function CardsButton ({children, ...restProps}){
 return <Button {...restProps}>{children}</Button>
}

export default  Cards