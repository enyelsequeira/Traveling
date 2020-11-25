import styled from "styled-components/macro"

export const PartnerSection = styled.section`
`
export const Container = styled.div`
max-width: 1280px;

margin: 0 auto

`
export const Top = styled.div`
max-width: 70%;
margin: 0 auto;
@media ${({theme}) => theme.breakpoints.xs}{
max-width: 100%;
padding: 1rem;
}

`
export const TopTitle = styled.h2`
// font-weight: ${({theme}) => theme.typography.h1.weight};
font-size: ${({theme}) => theme.typography.h2.size};
line-height:${({theme}) => theme.typography.h2.line}; 
max-width: 100%;
margin: 2rem auto;
text-align: center;
color:  ${({theme}) => theme.colors.accentOne};

`
export const TopSub = styled.h4`
text-align: center;
margin: 2rem 0;
font-weight: ${({theme}) => theme.typography.h5.weight};
font-size: ${({theme}) => theme.typography.h4.size};
line-height:${({theme}) => theme.typography.h5.line}; 
 
`
export  const Bottom = styled.div``
export const BottomTitle = styled.h1`
text-align: center;
margin: 2rem 0;
font-weight: ${({theme}) => theme.typography.h2.weight};
font-size: ${({theme}) => theme.typography.h2.size};
line-height:${({theme}) => theme.typography.h2.line}; 
`

export const BoldText = styled.b`
color: ${({theme}) => theme.colors.primaryThree};

`