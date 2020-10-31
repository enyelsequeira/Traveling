import styled from "styled-components/macro"
import { Link } from "gatsby"
import Img from 'gatsby-image';
import {motion} from "framer-motion"


export const CardsContainer = styled(motion.div)`
border: 1px solid ${({theme}) => (theme.colors.primaryOne)};
display: flex;
flex-direction: column;
margin: 1rem 0;
border-radius: 12px;
box-shadow: 5px -2px 8px 0px ${({theme}) => (theme.colors.accentTwo)};
`

export const Title = styled(motion.h2)`
 font-size: ${({theme}) => (theme.typography.h2.size)};
 line-height: ${({theme}) => (theme.typography.h2.line)};
 color: ${({theme}) => (theme.colors.accentTwo)};
 text-transform: uppercase;
 text-align: center;
 margin: 1rem 0;
 
`
export const ImageWrapper = styled (motion.div)`
max-width: 100%;
`


export const Image = styled(Img)`
max-width: 100%;
width: 350px;
height: 350px;
margin: 1rem auto;
border-radius: 12px;
box-shadow: 5px -2px 8px 0px ${({theme}) => (theme.colors.accentTwo)};
`

export const Description  = styled.p`
margin: 1.2rem auto;
padding: .2rem;

 font-size: ${({theme}) => (theme.typography.sText.size)};
 line-height: ${({theme}) => (theme.typography.sText.line)};
 font-weight: ${({theme}) => (theme.typography.sText.weight)};
`
export const Date = styled.p`
margin: 1rem auto;
 font-size: ${({theme}) => (theme.typography.captionText.size)};
 line-height: ${({theme}) => (theme.typography.captionText.line)};
 font-weight: ${({theme}) => (theme.typography.captionText.weight)};
`

export const Button = styled(Link)`
background: ${({theme}) => (theme.colors.primaryThree)};
border-radius: 8px;
width: fit-content;
padding: 1rem;
margin: 2rem auto;
 font-size: ${({theme}) => (theme.typography.btnText.size)};
 line-height: ${({theme}) => (theme.typography.btnText.line)};
 font-weight: ${({theme}) => (theme.typography.btnText.weight)};
 text-transform: ${({theme}) => (theme.typography.btnText.transform)};
 color: ${({theme}) => (theme.colors.primaryOne)};
  transition: all 0.5s cubic-bezier(1,.15,.34,.92);
  &:hover,
  &:focus {
    box-shadow: inset 0 0 0 2rem ${({theme}) => (theme.colors.accentOne)};
    color: ${({theme}) => (theme.colors.primaryOne)};
  }
`


