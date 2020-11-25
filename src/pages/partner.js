import React from "react"
import Layout from "../layout/Layout"
import SEO from "../utils/seo"
import PartnerContainer from "../containers/partnerContainer"

const Partner = () => {
  return <Layout>
    <SEO title="Information about Us" description="Information on how to be part of the group" />
    <PartnerContainer/>

  </Layout>

}

export default Partner