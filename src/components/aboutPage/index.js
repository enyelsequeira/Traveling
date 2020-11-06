import React from "react"
import {
  AboutPageSection,
  Container,
  SectionContainer, SectionContent, SectionImage, SectionPane, SectionText,
  SectionTitle,
  SubTitle,
  Title,
  TitleContainer
} from "./styles/aboutPage"

const AboutPage = ({children, restProps}) => {
  return <AboutPageSection {...restProps}>{children}</AboutPageSection>
}

AboutPage.Container = function AboutPageContainer({children, ...restProps}){
  return <Container {...restProps}>{children}</Container>
}
AboutPage.TitleContainer = function AboutPageTitleContainer({children, ...restProps}){
  return <TitleContainer {...restProps}>{children}</TitleContainer>
}
AboutPage.Title = function AboutPageTitle({children, ...restProps}){
  return <Title {...restProps}>{children}</Title>
}
AboutPage.SubTitle = function AboutPageSubTitle({children, ...restProps}){
  return <SubTitle {...restProps}>{children}</SubTitle>
}
// pane sections

AboutPage.SectionContainer = function AboutPageSectionContainer({children,...restProps}){
  return < SectionContainer {...restProps}>{children}</SectionContainer>
}
AboutPage.SectionTitle = function AboutPageSectionTitle({children,...restProps}){
  return < SectionTitle {...restProps}>{children}</SectionTitle>
}
AboutPage.SectionContent = function AboutPageSectionContent({children,...restProps}){
  return < SectionContent {...restProps}>{children}</SectionContent>
}
AboutPage.SectionPane = function AboutPageSectionPane({children,...restProps}){
  return <SectionPane {...restProps}>{children}</SectionPane>
}
AboutPage.SectionText = function AboutPageSectionText({children,...restProps}){
  return <SectionText {...restProps}>{children}</SectionText>
}
AboutPage.SectionImage = function AboutPageSectionImage({children,...restProps}){
  return <SectionImage {...restProps}>{children}</SectionImage>
}
export default AboutPage