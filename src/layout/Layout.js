import React from "react"
import Header from "../containers/headerContainer"
import { useStaticQuery, graphql } from "gatsby"
import FooterContainer from "../containers/footerContainer"

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
      <FooterContainer siteAuthor={data.site.siteMetadata.author} />
    </>
  )
}

export default PageLayout
