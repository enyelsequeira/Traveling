import styled from "styled-components/macro"
import {css} from "styled-components"
// import Img from "gatsby-image"

export const HeroSection = styled.section`
margin: 1rem 0;
`
export const Container = styled.div`
width: 100%;
max-width: 1280px;
margin: auto;
display: flex;
justify-content: space-around;
  @media ${({ theme }) => theme.breakpoints.xs} {
    flex-direction: column;
  }
   @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
  }
   @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: column;
  }

`

export const Left = styled.div`
width: 48%;
max-width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
align-self: center;
 
  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 100%;
  }
`

export const LeftText = styled.h1`
max-width: 100%;
display: flex;
align-items: center;
justify-content: center;
align-self: center;
font-weight: ${({theme}) => theme.typography.h1.weight};
font-size: ${({theme}) => theme.typography.h1.size};
line-height:${({theme}) => theme.typography.h1.line}; 
 @media ${({ theme }) => theme.breakpoints.xs} {
  flex-direction: column;

  }
`

export const LeftTextColor = styled.h1`
color: ${({theme}) => theme.colors.primaryThree};
margin: 3rem 0;
`
export const LeftTextName = styled.span`
font-weight: ${({theme}) => theme.typography.h1.weight};
font-size: ${({theme}) => theme.typography.h3.size};
  ${({ color }) =>
  color &&
  css`
      color: ${color};
    
    `}

`
export const LeftParagraph= styled.h5`
margin: 3rem 0;
text-transform: uppercase;
font-weight: 900;
letter-spacing: .3rem;
text-align: center;
font-size: ${({theme}) => theme.typography.h5.size};
line-height:${({theme}) => theme.typography.h5.line}; 
color: #006D5F;
 @media ${({ theme }) => theme.breakpoints.xs} {
 padding: 1rem;

  }

`

export const Right = styled.div`
padding: 2rem;
@media ${({ theme }) => theme.breakpoints.sm} {
padding: 5rem;
  }
`

export const RightImage = styled.img`
max-width: 100%;
box-sizing: border-box;
filter: drop-shadow(20px 20px 4px rgba(0, 0, 0, 0.25));
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 50%;
    display: flex;
    margin: 0 auto
  }
    @media ${({ theme }) => theme.breakpoints.xs} {
    width: 100%;
    display: flex;
  }
`
