import React from "react"

import SEO from "../utils/seo"
import Layout from "../layout/Layout"
import {graphql, useStaticQuery, Link } from "gatsby"


const Destinations = () => {
  const data = useStaticQuery(graphql`
      query{
          allContentfulBlogPost(
              sort:{
                  fields: publishedDate,
                  order: DESC
              }
          ){
              edges{
                  node{
                      title
                      slug
                      publishedDate(formatString: "MMMM Do, YYYY")
                  }
              }
          }
      }
  `)
  return (
    <Layout>
      <SEO title="Blog Posts" description="Blog posts are here" />
      <ol>{
        data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li>
              <Link to={`/destinations/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>


            </li>
          )
        })
      }</ol>
      <p>i am at the destinatiotnsf</p>
    </Layout>
  )
}

export default Destinations