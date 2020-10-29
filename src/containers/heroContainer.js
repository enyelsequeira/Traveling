import React from "react"
import { Hero } from "../components"
import TravelingImage from "../images/travelers.svg"

const HeroContainer =() => {
  return (
    <Hero>
     <Hero.Container>
       <Hero.Left>
         <Hero.LeftText>Travel with<Hero.LeftTextName color="#FB8F1D">ME</Hero.LeftTextName></Hero.LeftText>
         <Hero.LeftTextColor>
         <Hero.LeftTextName color="#006D5F">Matilde</Hero.LeftTextName>
         <Hero.LeftTextName> & </Hero.LeftTextName>
         <Hero.LeftTextName  color="#202336" >Enyel</Hero.LeftTextName>
         </Hero.LeftTextColor>
         <Hero.LeftParagraph> Join us on a Journey around the world. One Country at a time</Hero.LeftParagraph>
       </Hero.Left>
       <Hero.Right>
        <Hero.RightImage src={TravelingImage} alt ="travelers"/>
       </Hero.Right>
     </Hero.Container>
    </Hero>
  )
}

export  default  HeroContainer