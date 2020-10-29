import styled from "styled-components/macro"
import { Link as ReactScroll } from "react-scroll"
import Img from "gatsby-image"
import { Link } from "gatsby"

export const HeaderSection = styled.nav`
  background: ${({ active, theme }) =>
  active ? theme.colors.primaryOne : "hsl(232.7,27.3%,23.7%)"};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;

  @media screen and(max-width) {
    background: ${({ click }) => (click ? "#fff" : "transparent")};
    transition: 0.8s all ease;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1280px;
`

export const NavLogo = styled(ReactScroll)`
  color: #141414;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`
export const NavIcon = styled(Img)`
  margin: 1.5rem 0 2rem;
  width: 80px;
  border-radius: 50%;
  @media screen and (max-width: 960px) {
    margin: 0;
    width: 60px;
  }
`
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    font-weight: bolder;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 3rem;
    cursor: pointer;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
    opacity: 1;
    transition: all 0.2s ease;
    background: rgba(255, 246, 235, 0.9);
  }
`
export const NavItem = styled.li`
  height: 80px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`
export const NavLinks = styled(ReactScroll)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 2rem;
  font-weight: bolder;
  height: 100%;
  margin: 0 2rem;
 color: ${props => props.theme.colors.primaryThree};

 
  &.active {
    border-bottom: 3px solid ${props => props.theme.colors.accent1};
  }

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.accent1};
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    margin: 0;
    padding: 2rem;
    width: 100%;
    display: table;
    color: ${props => props.theme.colors.background1};
  }
`
export const PageLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 2rem;
  font-weight: bolder;
  height: 100%;
  margin: 0 2rem;
 color: ${({theme}) => (theme.colors.primaryTwo)};

  &.active {
    border-bottom: 3px solid ${props => props.theme.colors.accent1};
  }

  &:hover {
    color: ${props => props.theme.colors.accent1};
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    margin: 0;
    padding: 2rem;
    width: 100%;
    display: table;
    color: ${props => props.theme.colors.background1};
  }
`
