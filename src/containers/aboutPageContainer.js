import React from "react"
import { About } from "../components"

const AboutPageContainer = ({siteAuthor}) => {
  return <About>
    <About.Container>
      <About.TitleContainer>
        <About.Title>Who are we?</About.Title>
        <About.SubTitle>We are Lorem</About.SubTitle>
      </About.TitleContainer>

      <>
      <About.SectionContainer>
        <About.SectionTitle alignSelf="flex-end">Enyel</About.SectionTitle>
          <About.SectionContent>
            <About.SectionPane left>
              <About.SectionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</About.SectionText>
            </About.SectionPane>
            <About.SectionPane center>
              <About.SectionImage src={require("../images/travelers.svg")} alt={siteAuthor} />
            </About.SectionPane>
          </About.SectionContent>
      </About.SectionContainer>

        <About.SectionContainer>
          <About.SectionTitle alignSelf="flex-start">Matilde</About.SectionTitle>
          <About.SectionContent direction="row-reverse">
            <About.SectionPane right>
              <About.SectionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</About.SectionText>
            </About.SectionPane>
            <About.SectionPane center>
              <About.SectionImage src={require("../images/travelers.svg")} alt={siteAuthor}/>
            </About.SectionPane>
          </About.SectionContent>
        </About.SectionContainer>

        <About.SectionContainer>
          <About.SectionTitle> Do you want to be part of the team?</About.SectionTitle>
          <About.SectionContent direction="row">
            <About.SectionPane left>
              <About.SectionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</About.SectionText>
            </About.SectionPane>
            <About.SectionPane center>
              <About.SectionImage src={require("../images/travelers.svg")} alt={siteAuthor}/>
            </About.SectionPane>
          </About.SectionContent>
        </About.SectionContainer>
        </>
    </About.Container>
  </About>

}

export default AboutPageContainer