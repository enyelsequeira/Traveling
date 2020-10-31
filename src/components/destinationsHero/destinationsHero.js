import styled from "styled-components/macro"

export const DestinationsSection = styled.section`
margin: 1rem;
`

export const Container = styled.div`
padding: .6rem;
max-width: 1800px;
margin: auto;
 display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 5rem;
   @media ${({ theme }) => theme.breakpoints.lg} {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`
