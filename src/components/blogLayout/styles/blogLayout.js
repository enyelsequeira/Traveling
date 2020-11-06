import styled from "styled-components/macro"
import BackgroundImage from 'gatsby-background-image'

export const BlogSection = styled.section`
padding: 1rem;

`

export const Container = styled.div`
max-width: 1280px;
margin: 0 auto;
padding: 1rem;  
@media ${({ theme }) => theme.breakpoints.sm}{
padding: 1rem 0;
 }
`
export const TitleContainer = styled(BackgroundImage)`
border: 2px solid black;
margin: 2rem 0;
width: 100%;
height: 50vh;
max-width: 100%;
border-radius: 10px;
 @media ${({ theme }) => theme.breakpoints.sm}{
 flex-direction: column;
 width: 100%;
 }
`
export const TitleTextContainer = styled.div`
 position: absolute;
 bottom: 0;
  margin: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
   @media ${({ theme }) => theme.breakpoints.sm}{
   height: 100%;
   max-width: 100%;
   position: relative;
   top: 0;
   bottom: 0;
   display: flex;
   flex-direction: column;
    align-items: baseline;
    padding: 1rem;
}
   
  

`
export const Title = styled.h1`
 font-size: ${({theme}) => (theme.typography.h2.size)};
 line-height: ${({theme}) => (theme.typography.h1.line)};
 font-weight: 900;
 letter-spacing: .2rem;
 text-transform: uppercase;
 margin: 0 1rem;
 color: ${({theme}) => (theme.colors.primaryOne)};
 text-shadow: -1px -1px 2px rgba(147, 150, 150, 1);
  @media ${({ theme }) => theme.breakpoints.sm}{
  margin: 0;
  text-align: center
  }

`


export const CountryFlag = styled.img`
width: 80px;
max-width: 100px;
margin: 0 1rem;
 @media ${({ theme }) => theme.breakpoints.sm}{
    margin: 0 auto;
    display: flex;
    margin-right: 10px;
 }
`
export const BlogBodyContainer = styled.div`
display: flex;
 @media ${({ theme }) => theme.breakpoints.lg}{
  flex-direction: column;
 }
`
// Info
export const InformationContainer = styled.div`
width: 100%;
margin: 1rem 0;
padding: 1rem;
`
export const Data = styled.p`
font-size: ${({theme}) => (theme.typography.lText.size)};
 line-height: ${({theme}) => (theme.typography.lText.line)};
margin: 2rem 0;
`
export const SpanText = styled.span`
color: ${({theme}) => (theme.colors.primaryThree)};
font-weight: 900;
`

export const BlogBody = styled.div`
padding: 1.5rem;
margin: 1rem 0;
 display: grid;
 grid-template-rows: repeat(auto-fill, minmax(400px));
 grid-gap: 1rem;
   & > p{
   margin: 1rem 0;
   font-size: ${({theme}) => (theme.typography.h5.size)};
   line-height: ${({theme}) => (theme.typography.h5.line)};
   font-weight: ${({theme}) => (theme.typography.h5.weight)};
   text-align: justify;
   }
`


export const ImagesContainer = styled.div`
`

