import React from "react"
import { Blog } from "../components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Peace from "../images/peace.svg"
import BlogImagesCarrousel from "../components/blogImagesCarrousel"
import { SpanText } from "../components/blogLayout/styles/blogLayout"



const BlogLayoutContainer = ({ data }) => {
// console.log(data.visa)

return <Blog>
  <Blog.Container>
    <Blog.TitleContainer  fixed={data.countryImage.fluid}>
      <Blog.TitleTextContainer>
        <Blog.Title>{data.title}
        </Blog.Title>
        {data.flag === null ?  <Blog.CountryFlag src={Peace} alt="peace"/> : <Blog.CountryFlag src={data.flag.fluid.src} alt="flag" /> }
      </Blog.TitleTextContainer>
    </Blog.TitleContainer>
    <Blog.BlogBodyContainer>
      <Blog.InformationContainer>
        <Blog.Data>{data.childContentfulBlogPostBlogpostRichTextNode.fields.readingTime.text}</Blog.Data>
        <Blog.Data>Currency: <Blog.SpanText> {data.currency}</Blog.SpanText> </Blog.Data>
        <Blog.Data>Capital: <SpanText> {data.topCities} </SpanText></Blog.Data>
        { data.visa === null   ?  <Blog.Data>Visa ?</Blog.Data>  : <Blog.Data>Visa: <SpanText>{data.visa.toString()}</SpanText></Blog.Data> }
        <Blog.Data>Language: <SpanText> {data.spokenLanguage} </SpanText></Blog.Data>
      </Blog.InformationContainer>
      <Blog.BlogBody>
      {
        documentToReactComponents(data.childContentfulBlogPostBlogpostRichTextNode.json)
      }
    </Blog.BlogBody>
      </Blog.BlogBodyContainer>
    <Blog.ImagesContainer>
      <BlogImagesCarrousel images={data.images} />
    </Blog.ImagesContainer>
  </Blog.Container>
</Blog>
}

export default BlogLayoutContainer