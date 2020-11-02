import React from "react"
import {
  CarrouselSection,
  Container, ContainerImage,
  Title,
  TitleContainer,
  TitleLink
} from "./styles/carrousel"

const Carrousel = ({children, ...restProps}) => {
  return <CarrouselSection {...restProps}>{children}</CarrouselSection>
}
Carrousel.Container = function CarrouselContainer({children, ...restProps}){
  return <Container {...restProps}>{children}</Container>
}
Carrousel.TitleContainer = function TitleContainers({children, ...restProps}){
  return <TitleContainer {...restProps}>{children}</TitleContainer>
}
Carrousel.Title = function CarrouselTitle({children, ...restProps}){
  return <Title {...restProps}>{children}</Title>
}
Carrousel.TitleLink = function CarrouselTitleLink({children, ...restProps}){
  return <TitleLink  {...restProps}>{children}</TitleLink >
}

Carrousel.ContainerImage = function CarrouselContainerImage({children, ...restProps}){
  return <ContainerImage {...restProps}>{children}</ContainerImage>

}


export default Carrousel