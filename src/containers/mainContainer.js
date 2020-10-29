import React from "react"
import { Main } from "../components"
import travel from "../images/travel1.svg"


const MainContainer = () => {
  return (
  <Main>
    <Main.Container>
      <Main.Left>
        <Main.LeftImg src={travel} alt="traveling"/>
      </Main.Left>
      <Main.Right>
        <Main.RightTitle>
          A new way to explore the world
        </Main.RightTitle>
        <Main.RightPara>
          Discover a new way of traveling, we will be sharing the <Main.RightTextSpan color='#FB8F1D'>good </Main.RightTextSpan>, the <Main.RightTextSpan color='#FB8F1D'>Bad </Main.RightTextSpan>and of course all of us want to know the <Main.RightTextSpan color='#FB8F1D'>Cheap </Main.RightTextSpan>.
        </Main.RightPara>
        <Main.RightPara>
          We will be sharing with all of our reader our tips to get the best of your holidays abroad. So come with us in our adventures.
        </Main.RightPara>
      </Main.Right>
    </Main.Container>
  </Main>
  )
}

export default  MainContainer