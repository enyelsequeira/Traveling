import React from "react"
import SEO from "../utils/seo"
import Layout from "../layout/Layout"
import HeroContainer from "../containers/heroContainer"
import MainContainer from "../containers/mainContainer"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" description="Main page of travel With us" />
      <HeroContainer/>
      <MainContainer/>
      <p>Hello thing</p>
    </Layout>
  )
}

export default IndexPage
