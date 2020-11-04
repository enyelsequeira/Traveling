import styled from "styled-components/macro"
import { motion } from "framer-motion"
import Img from "gatsby-image"

export const Container = styled.div`
width: 100%;
margin: 2rem auto;
  text-align: center;
  display: grid;
  padding: 1rem;
   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  &:hover {
    cursor: pointer;
  }
`
export const ImageContainer = styled(motion.div)`

`

export const ImageWrapper = styled(Img)`
border: 1px solid green;
`


export const ModalSection = styled(motion.section)`
    max-width: 40%;
    border-radius: 10px;
   padding: 2rem;
   position: absolute;
   margin:0 auto;
   display:table;
   position: absolute;
   left: 0;
   right:0;
   top: 50%; 
    background: rgba(0, 0, 0, 0.8);
    @media ${({ theme }) => theme.breakpoints.lg} {
max-width: 60%;
  }
   @media ${({ theme }) => theme.breakpoints.md} {
max-width: 93%;
  }
   @media ${({ theme }) => theme.breakpoints.sm} {
    left: 0;
   right:0;
   top: 150%;
  }
`
export const ModalInside = styled(motion.div)`
max-width: 95%;
margin: 0 auto;
border-radius: 50px;
background: #d2d7da;
box-shadow:  2px -5px 10px #b3b7b9, 
             -2px 2px 5px #f2f7fb;

`

export const ModalImage = styled(Img)`
max-width: 100%;
border-radius: 50px;
`

export const CloseBtn = styled.button`
position: relative;
padding: 1rem;
left: 54%;
top: -64px;
background:${({theme}) => (theme.colors.primaryOne)};
color: ${({theme}) => theme.colors.primaryTwo};
font-size: ${({theme}) => theme.typography.btnText.size};
text-transform: ${({theme}) => theme.typography.btnText.transform} ;
font-weight: ${({theme}) => theme.typography.btnText.weight};
&:hover{
cursor: pointer;
}
`

export const SingleImage = styled.img`
border-radius: 10px;
border: 1px solid ${({theme}) => theme.colors.primaryTwo};
`
