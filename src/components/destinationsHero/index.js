import React from "react"
import { Container, DestinationsSection } from "./destinationsHero"

const DestinationsHero = ({children, ...restProps})=> {
  return (
    <DestinationsSection {...restProps}>{children}</DestinationsSection>
  )
}

DestinationsHero.Container = function DestinationHeroContainer({children, ...restProps}){
  return <Container {...restProps}>{children}</Container>
}



export default DestinationsHero