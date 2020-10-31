import React from "react"
import Layout from "../layout/Layout"
import {graphql} from "gatsby"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


export const query = graphql`
query($slug: String!){
    contentfulBlogPost(slug: {eq: $slug}){
        title
        publishedDate(formatString: "MMMM Do, YYYY")
       
    }
}
`

const Blog = (props) => {
  // const options = {
  //   renderNode: {
  //     "embedded-asset-block": (node) => {
  //       const alt = node.data.target.fields.title['en-US']
  //       const url = node.data.target.fields.file['en-US'].url
  //       console.log(url, "555454a54")
  //       return <img alt={alt} src={url} />
  //     }
  //   }
  // }
  return(
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {/*{*/}
      {/*  documentToReactComponents(props.data.contentfulBlogPost.body.json, options)*/}
      {/*}*/}

    </Layout>
  )
}
export default Blog;