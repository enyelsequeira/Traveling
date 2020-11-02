import styled from "styled-components/macro"

export const DestinationsSection = styled.section`
margin: 1rem;
`

export const Container = styled.div`
padding: .6rem;
width: 100%;
max-width: 1280px;
margin: auto;
 display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 5rem;
   @media ${({ theme }) => theme.breakpoints.lg} {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`

