import React from "react"
import Layout from "../layout/Layout"
import {graphql} from "gatsby"
import BlogLayoutContainer from "../containers/blogLayoutContainer"


export const query = graphql`
query($slug: String!){
    contentfulBlogPost(slug: {eq: $slug}){
        visa
        currency
        spokenLanguage
        topCities
        countryImage{
            fluid(maxWidth: 1200,  quality: 100){
                ...GatsbyContentfulFluid_withWebp
            }
        }
        title
        publishedDate(formatString: "MMMM Do, YYYY")
        images{
            title
            id
            fluid( quality: 100) {
                src
                ...GatsbyContentfulFluid_withWebp
            }
        }
        flag{
            fluid(maxWidth: 400){
                src
            }
        }
        childContentfulBlogPostBlogpostRichTextNode{
            json
            fields {
                readingTime {
                    text
                    words
                }
            }
        }
    }
}
`

const Blog = (props) => {
  return(
    <Layout>
      <BlogLayoutContainer data={props.data.contentfulBlogPost} />
    </Layout>
  )
}
export default Blog;