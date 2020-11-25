import React from "react"
import Layout from "../layout/Layout"
import AboutPageContainer from "../containers/aboutPageContainer"
import SEO from "../utils/seo"
import { useStaticQuery, graphql } from "gatsby"



const About = () => {
  const data = useStaticQuery(graphql`
      query SiteAuthor {
          site {
              siteMetadata {
                  title
                  author
              }
          }
      }
  `)
  return <Layout>
    <SEO title="Information about Us" description="Information about Matilde and Enyel" />
    <AboutPageContainer siteAuthor={data.site.siteMetadata.author} />
  </Layout>
}

export default About