import React from "react"

import SEO from "../utils/seo"
import Layout from "../layout/Layout"
import DestinationHeroContainer from "../containers/destinationsHeroContainer"

const Destinations = () => {
  return (
    <Layout>
      <SEO title="Blog Posts" description="Blog posts are here" />
      <DestinationHeroContainer/>
    </Layout>
  )
}

export default Destinations