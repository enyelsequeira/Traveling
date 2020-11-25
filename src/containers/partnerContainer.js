import React from "react"
import { PartnerPage } from "../components"
import Test from "../assets/globe.svg"
import IndexForm from "../components/contactForm"



const PartnerContainer = () => {
return <PartnerPage>
  <PartnerPage.Container>
    <PartnerPage.Top>
      <PartnerPage.TopTitle>
      Let's Work <PartnerPage.BoldText>together</PartnerPage.BoldText>  and let's share our amazing <PartnerPage.BoldText>experiences </PartnerPage.BoldText>!
      </PartnerPage.TopTitle>
      <PartnerPage.TopSub>
        We encourage travel and hope that this blog gives you the motivation that you need to pack your bags, and take the first flight out to an amazing destination.
      </PartnerPage.TopSub>
      <Test style={{maxWidth: "100%"}}  />
    </PartnerPage.Top>
    <PartnerPage.Bottom>
      <PartnerPage.BottomTitle>Become a <PartnerPage.BoldText>Partner</PartnerPage.BoldText> and share with the <PartnerPage.BoldText> world</PartnerPage.BoldText>! </PartnerPage.BottomTitle>
      <IndexForm />
    </PartnerPage.Bottom>
  </PartnerPage.Container>
</PartnerPage>
}

export default PartnerContainer