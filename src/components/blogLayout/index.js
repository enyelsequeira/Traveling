import React from "react"
import {
  BlogBody,
  BlogSection,
  Container,
  CountryFlag,
  ImagesContainer,
  ReadingTime,
  Title,
  TitleContainer
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
BlogLayout.CountryFlag = function BlogLayoutCountryFlag({children, ...restProps}){
  return <CountryFlag {...restProps}>{children}</CountryFlag>
}

BlogLayout.Title = function BlogLayoutTitle({children, ...restProps}){
  return <Title {...restProps}>{children}</Title>
}
BlogLayout.ReadingTime = function BlogLayoutReadingTime({children, ...restProps}){
  return <ReadingTime {...restProps}>{children}</ReadingTime>
}
BlogLayout.BlogBody  = function BlogLayoutBody({children, ...restProps}){
  return <BlogBody {...restProps}>{children}</BlogBody>
}
BlogLayout.ImagesContainer = function BlogLayoutImage({children, ...restProps}){
  return <ImagesContainer {...restProps}>{children}</ImagesContainer>
}
export default BlogLayout