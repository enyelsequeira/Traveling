import React from "react"
import {
  CarrouselSection,
  Container, ContainerImage,
  Title,
  TitleContainer,
  TitleLink
} from "./styles/smallCards"

const SmallCards = ({children, ...restProps}) => {
  return <CarrouselSection {...restProps}>{children}</CarrouselSection>
}
SmallCards.Container = function SmallCardsContainer({children, ...restProps}){
  return <Container {...restProps}>{children}</Container>
}
SmallCards.TitleContainer = function TitleContainers({children, ...restProps}){
  return <TitleContainer {...restProps}>{children}</TitleContainer>
}
SmallCards.Title = function SmallCardsTitle({children, ...restProps}){
  return <Title {...restProps}>{children}</Title>
}
SmallCards.TitleLink = function CarrouselTitleLink({children, ...restProps}){
  return <TitleLink  {...restProps}>{children}</TitleLink >
}

SmallCards.ContainerImage = function SmallCardsContainerImage({children, ...restProps}){
  return <ContainerImage {...restProps}>{children}</ContainerImage>

}


export default SmallCards