import React from "react"
import { Footer } from "../components"
import { AiFillFacebook,AiFillTwitterSquare,AiFillInstagram} from "react-icons/ai";

const FooterContainer = ({siteAuthor}) => {
  return <Footer>
    <Footer.Container>
    <Footer.Top>
      <Footer.TopText> Ready to Explore? Follow us in our Social Media</Footer.TopText>
    </Footer.Top>
      <Footer.Bottom>
        <Footer.Social>
          <Footer.SocialLink href="https://www.google.com/" >
            <AiFillFacebook    size="3rem"/>
          </Footer.SocialLink>
          <Footer.SocialLink  href="https://www.google.com/">
            <AiFillTwitterSquare size="3rem"/>
          </Footer.SocialLink>
          <Footer.SocialLink  href="https://www.google.com/">
          <AiFillInstagram size="3rem"/>
          </Footer.SocialLink>
          </Footer.Social>
        <Footer.ContactUs>Email us @@@@</Footer.ContactUs>
        <Footer.Copyright> 	&#169; reserved {siteAuthor}</Footer.Copyright>
      </Footer.Bottom>
    </Footer.Container>
  </Footer>
}


export default  FooterContainer