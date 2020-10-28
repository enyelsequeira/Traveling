import React from "react"
import {  Footer } from "../components"
import Header from "../containers/headerContainer"
import { useStaticQuery, graphql } from "gatsby"

const PageLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer siteAuthor={data.site.siteMetadata.author} />
    </>
  )
}

export default PageLayout
