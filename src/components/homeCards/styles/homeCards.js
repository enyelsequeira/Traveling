import styled from "styled-components/macro"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
import {motion} from "framer-motion"

export const CardsContainer = styled(motion.div)`
border: 2.3px solid ${({theme}) => (theme.colors.primaryTwo)};
display: flex;
width: 262px;
margin: 3rem auto;
border-radius: 8px;
background: #202336;
box-shadow: inset 5px 5px 23px ${({theme}) => (theme.colors.primaryTwo)}, 
            inset -5px -5px 23px ${({theme}) => (theme.colors.accentOne)}
           

`

export const CardsImageContainer = styled(Link)``

export const CardsImage = styled(BackgroundImage)`
width: 255px;
max-width: 100%;
height: 332px;
margin: auto;
background-size: cover;
background-position: center center;
`
export const CardsTitle = styled.p`
width: fit-content;
padding: .2rem 1rem;
background-color: rgba(255,255,255, 0.9);
position: relative;
top: 310px;
background-blend-mode: screen;
 font-size: ${({theme}) => (theme.typography.normalText.size)};
 line-height: ${({theme}) => (theme.typography.sText.line)};
 font-weight:${({theme}) => (theme.typography.normalText.weight)}; ;
 color: ${({theme}) => (theme.colors.primaryTwo)};
`

