import React from "react"
import {
  BlogBody, BlogBodyContainer,
  BlogSection,
  Container,
  CountryFlag,  Data,
  ImagesContainer, InformationContainer,
   SpanText,
  Title,
  TitleContainer, TitleTextContainer,
} from "./styles/blogLayout"

const BlogLayout = ({children, ...restProps}) => {
return (
  <BlogSection {...restProps}>{children}</BlogSection>
)
}

BlogLayout.Container = function BlogLayoutContainer({children, ...restProps}){
  return <Container {...restProps}>{children}</Container>
}
BlogLayout.TitleContainer = function BlogLayoutTitleContainer({children, ...restProps}){
  return <TitleContainer {...restProps}>{children}</TitleContainer>
}
BlogLayout.TitleTextContainer = function BlogLayoutTitleTextContainer({children, ...restProps}){
  return <TitleTextContainer {...restProps}>{children}</TitleTextContainer>
}
BlogLayout.CountryFlag = function BlogLayoutCountryFlag({children, ...restProps}){
  return <CountryFlag {...restProps}>{children}</CountryFlag>
}

BlogLayout.Title = function BlogLayoutTitle({children, ...restProps}){
  return <Title {...restProps}>{children}</Title>
}
BlogLayout.BlogBodyContainer = function BlogLayoutBodyContainer({children, ...restProps}){
  return <BlogBodyContainer {...restProps}>{children}</BlogBodyContainer>
}

// Country informtaion
BlogLayout.InformationContainer = function BlogLayoutInformationContainer({children, ...restProps}){
  return <InformationContainer {...restProps}>{children}</InformationContainer>
}
BlogLayout.SpanText = function BlogLayoutSpanText({children, ...restProps}){
  return <SpanText {...restProps}>{children}</SpanText>
}
BlogLayout.Data = function BlogLayoutData({children, ...restProps}){
  return <Data {...restProps}>{children}</Data>
}


BlogLayout.BlogBody  = function BlogLayoutBody({children, ...restProps}){
  return <BlogBody {...restProps}>{children}</BlogBody>
}
BlogLayout.ImagesContainer = function BlogLayoutImage({children, ...restProps}){
  return <ImagesContainer {...restProps}>{children}</ImagesContainer>
}
export default BlogLayout