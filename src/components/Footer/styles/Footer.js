import styled from "styled-components/macro"

export const FooterSection = styled.section`
margin: 5rem 0;
`

export const Container = styled.div`
max-width: 1800px;
margin: auto;
`

export const Top = styled.div`
margin: 2rem 0;
`
export const TopText = styled.h3`
text-align: center;
font-weight: ${({theme}) => theme.typography.h3.weight};
font-size: ${({theme}) => theme.typography.h3.size};
line-height:${({theme}) => theme.typography.h3.line}; 
`


export const Bottom = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin: 1.5rem 0;
@media ${({ theme }) => theme.breakpoints.lg} {
  flex-direction: column;

  }
`
export const Social = styled.div`
margin: 1rem 0;
display: flex;

`
export const SocialLink = styled.a`

height: 100%;
display: flex;
margin: 0 1rem;
  &:hover,
  &:focus {
    background: transparent;
    transform: translateY(-0.2rem);
    box-shadow: 0 6px 13px rgba(0, 0, 0, 0.3);
  }
  

 
`

export const ContactUs = styled.p`
font-weight: ${({theme}) => theme.typography.lText.weight};
font-size: ${({theme}) => theme.typography.lText.size};
line-height:${({theme}) => theme.typography.lText.line}; 
@media ${({ theme }) => theme.breakpoints.lg} {
margin: 1rem 0;

  }
`

export const Copyright = styled.p`
font-weight: ${({theme}) => theme.typography.lText.weight};
font-size: ${({theme}) => theme.typography.lText.size};
line-height:${({theme}) => theme.typography.lText.line}; 
@media ${({ theme }) => theme.breakpoints.lg} {
margin: 1rem 0;

  }
`

