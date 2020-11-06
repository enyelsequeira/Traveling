import styled from "styled-components/macro"
import {css} from "styled-components"

export const MainSection = styled.section`

`

export const Container = styled.div`
max-width: 1280px;
margin: 0 auto;
display: flex;
justify-content: space-around;
   @media ${({ theme }) => theme.breakpoints.lg} {
    flex-direction: column-reverse;
  }

`

export const Left = styled.div`
padding: 2rem;
width: 70%;
@media ${({ theme }) => theme.breakpoints.sm} {
padding: 5rem;
  }
    @media ${({ theme }) => theme.breakpoints.lg} {
width: 80%;
margin: 0 auto;
padding:0;
  }
`

export const LeftImg = styled.img`
max-width: 100%;
border: 1px solid ${({theme}) => theme.colors.primaryTwo};
border-radius: 10px;

box-sizing: border-box;
filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.25));
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
    display: flex;
    margin: 0 auto
  }
    @media ${({ theme }) => theme.breakpoints.xs} {
    width: 100%;
    display: flex;
  }
`


export const Right = styled.div`
width: 60%;
max-width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
align-self: center;
padding: 0 2rem;
   @media ${({ theme }) => theme.breakpoints.lg} {
width: 100%;
margin: 2rem 0;
  }
`
export const RightTitle = styled.h1`
margin: 1rem 0;
font-weight: ${({theme}) => theme.typography.h1.weight};
font-size: ${({theme}) => theme.typography.h1.size};
line-height:${({theme}) => theme.typography.h1.line}; 

`

export const MainPara = styled.p`
margin: 1rem 0;
color: ${({theme}) => theme.colors.accentTwo};
font-weight: ${({theme}) => theme.typography.lText.weight};
font-size: ${({theme}) => theme.typography.lText.size};
line-height:${({theme}) => theme.typography.lText.line}; 
`

export const RightTextSpan = styled.span`
font-weight: ${({theme}) => theme.typography.lText.weight};
font-size: ${({theme}) => theme.typography.lText.size};
line-height:${({theme}) => theme.typography.lText.line}; 
  ${({ color }) =>
  color &&
  css`
      color: ${color};
      text-transform: uppercase;
      font-weight: 900;
    `}

`