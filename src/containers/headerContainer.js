import React, {useEffect, useState} from "react"
import { Header } from "../components"
import { useStaticQuery, graphql } from "gatsby"
import { FaBars, FaTimes } from "react-icons/fa"
import { animateScroll } from "react-scroll"



const HeaderContainer = ({siteTitle}) => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => setClick(!click)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  const toggleHome = () => {
    animateScroll.scrollToTop()
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])
  const data = useStaticQuery(graphql`
      query {
          icon: file(relativePath: { eq: "logo.png" }) {
              childImageSharp {
                  fluid(maxWidth: 100) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)
  return (
    <Header active={scroll} click={click}>
      <Header.Container>
        <Header.Logo to='/' onClick={toggleHome}>
          <Header.Icon fluid={data.icon.childImageSharp.fluid} alt={siteTitle}/>
        </Header.Logo>
        <Header.MobileIcon onClick={handleClick}>
          {click ? (
            <FaTimes color="hsl(34.9,98.6%,72.9%)" />
          ) : (
            <FaBars color="hsl(34.9,98.6%,72.9%)" />
          )}
        </Header.MobileIcon>
        <Header.NavMenu onClick={handleClick} click={click}>
          <Header.NavItem>
            <Header.PageLink to="/">Home</Header.PageLink>
          </Header.NavItem>
          <Header.NavItem>
            <Header.PageLink to="/destinations">Destinations</Header.PageLink>
          </Header.NavItem>
          <Header.NavItem>
            <Header.PageLink to="/about">About</Header.PageLink>
          </Header.NavItem>
          <Header.NavItem>
            <Header.PageLink to="/partner">Partner</Header.PageLink>
          </Header.NavItem>
        </Header.NavMenu>


      </Header.Container>
    </Header>
  )
}
export default HeaderContainer