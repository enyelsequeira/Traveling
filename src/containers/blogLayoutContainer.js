import React from "react"
import { Blog } from "../components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Peace from "../images/peace.svg"
import BlogImagesCarrousel from "../components/blogImagesCarrousel"



const BlogLayoutContainer = ({ data }) => {


return <Blog>
  <Blog.Container>
    <Blog.TitleContainer>
      <Blog.Title>{data.title}
        {data.flag === null ?  <Blog.CountryFlag src={Peace} alt="peace"/> : <Blog.CountryFlag src={data.flag.fluid.src} alt="flag" /> }
      </Blog.Title>
      <Blog.ReadingTime>{data.childContentfulBlogPostBlogpostRichTextNode.fields.readingTime.text}</Blog.ReadingTime>
    </Blog.TitleContainer>
    <Blog.BlogBody>
      {
        documentToReactComponents(data.childContentfulBlogPostBlogpostRichTextNode.json)
      }
    </Blog.BlogBody>
    <Blog.ImagesContainer>
      <BlogImagesCarrousel images={data.images} />

    </Blog.ImagesContainer>
  </Blog.Container>
</Blog>
}

export default BlogLayoutContainer