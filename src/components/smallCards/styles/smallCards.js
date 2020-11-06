import styled from "styled-components/macro"
import { Link } from "gatsby"


export const CarrouselSection= styled.section``

export const Container = styled.div`
//border: 1px solid red;
max-width: 1280px;
margin: 4rem auto;
`
export const TitleContainer = styled.div`
display: flex;
justify-content: space-between;
@media ${({ theme }) => theme.breakpoints.lg} {
flex-direction: column;
text-align: center;
  }
`
export const TitleLink = styled(Link)`
margin-right: 3rem;
 width: fit-content;
 padding: 1rem;
 border: 1px solid ${props => props.theme.colors.primaryTwo};
 border-radius: 8px;
background: ${({theme}) => (theme.colors.primaryThree)};
 color: ${props => props.theme.colors.primaryOne};
 font-size: ${({theme}) => (theme.typography.btnText.size)};
 line-height: ${({theme}) => (theme.typography.btnText.line)};
 font-weight: ${({theme}) => (theme.typography.btnText.weight)};
 text-transform: ${({theme}) => (theme.typography.btnText.transform)};
  transition: all 0.5s cubic-bezier(1,.15,.34,.92);
 
 &:hover,
  &:focus {
    box-shadow: inset 0 0 0 2rem ${({theme}) => (theme.colors.accentOne)};
    color: ${({theme}) => (theme.colors.primaryOne)};
  };
  
 @media ${({ theme }) => theme.breakpoints.lg} {
 margin: 0;
 margin: 1rem auto;
 }


`
export const Title = styled.h1`
 color: ${props => props.theme.colors.primaryTwo};
 font-size: ${({theme}) => (theme.typography.h4.size)};
 line-height: ${({theme}) => (theme.typography.h4.line)};
 font-weight: ${({theme}) => (theme.typography.h4.weight)};
 letter-spacing: .12rem;
 word-spacing: .2rem;
 margin-left: 1rem;
`

export const ContainerImage = styled.div`
//border: 1px solid red;
padding: .6rem;


max-width: 1800px;
margin: auto;
 display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
   @media ${({ theme }) => theme.breakpoints.lg} {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

`
