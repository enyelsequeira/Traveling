import React from "react"
import SEO from "../utils/seo"
import Layout from "../layout/Layout"
import HeroContainer from "../containers/heroContainer"
import MainContainer from "../containers/mainContainer"
import HomeCardsContainer from "../containers/homeCardsContainer"
import { Map }from "../components"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" description="Main page of travel With us" />
      <HeroContainer/>
      <MainContainer/>
      <HomeCardsContainer />
      <Map/>
    </Layout>
  )
}

export default IndexPage
