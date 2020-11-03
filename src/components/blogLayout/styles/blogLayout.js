import styled from "styled-components/macro"

export const BlogSection = styled.section`

`

export const Container = styled.div`
max-width: 1280px;
margin: 2rem auto;
padding: 1rem;
border-radius: 50px;
background: #c2fff7;
box-shadow:  5px 5px 5px #1a1c2b, 
             -5px -5px 8px #262a41;
       
@media ${({ theme }) => theme.breakpoints.sm}{
padding: 1rem 0;
 }
`
export const TitleContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 2rem 0;
 @media ${({ theme }) => theme.breakpoints.sm}{
 flex-direction: column;
 }
`

export const Title = styled.h1`
 font-size: ${({theme}) => (theme.typography.h1.size)};
 line-height: ${({theme}) => (theme.typography.h1.line)};
 font-weight: ${({theme}) => (theme.typography.h1.weight)};
 text-transform: uppercase;
 color: ${({theme}) => (theme.colors.primaryTwo)};
 text-shadow: -1px -1px 2px rgba(147, 150, 150, 1);

`

export const ReadingTime = styled.p`
padding: 1rem;
color: ${({theme}) => (theme.colors.primaryTwo)};
text-transform: ${({theme}) => (theme.typography.captionText.transform)};
font-weight: ${({theme}) => (theme.typography.captionText.weight)};


`
export const CountryFlag = styled.img`
width: 100px;
max-width: 100px;
margin-left: 2rem;
 @media ${({ theme }) => theme.breakpoints.xs}{
    margin: 0 auto;
    display: flex;
 }
`


export const BlogBody = styled.div`
padding: 1.5rem;
margin: 1rem 0;
   & > p{
   margin: 1rem 0;
    font-size: ${({theme}) => (theme.typography.h5.size)};
 line-height: ${({theme}) => (theme.typography.h5.line)};
 font-weight: ${({theme}) => (theme.typography.h5.weight)};
 text-align: left;
   }

`

export const ImagesContainer = styled.div`
border: 1px solid red;
`

