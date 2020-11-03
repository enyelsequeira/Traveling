import React from "react"
import Layout from "../layout/Layout"
import {graphql} from "gatsby"
import BlogLayoutContainer from "../containers/blogLayoutContainer"


export const query = graphql`
query($slug: String!){
    contentfulBlogPost(slug: {eq: $slug}){
        title
        publishedDate(formatString: "MMMM Do, YYYY")
        images{
            title
            id
            fluid( maxHeight: 250, quality: 95) {
                src
                ...GatsbyContentfulFluid_withWebp
            }
        }
        flag{
            fluid(maxWidth: 100){
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