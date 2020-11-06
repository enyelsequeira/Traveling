import styled from "styled-components/macro"
import { css } from 'styled-components';

export const AboutPageSection = styled.section`
border: 1px solid red;
padding: .2rem;
`

export const Container = styled.div`
max-width: 1280px;
margin: 0 auto;
`

export const TitleContainer = styled.div`
text-align: center;
`
export const Title = styled.h1`
 font-size: ${({ theme }) => theme.typography.h1.size};
 line-height: ${({ theme }) => theme.typography.h1.line};
  font-weight: ${({ theme }) => theme.typography.h1.weight};
  margin: 1.2rem 0;

`
export const SubTitle = styled.p`
 font-size: ${({ theme }) => theme.typography.lText.size};
 line-height: ${({ theme }) => theme.typography.lText.line};
  font-weight: ${({ theme }) => theme.typography.lText.weight};
`

export const SectionContainer = styled.div`
  margin: 2rem auto;
  width: 100%;
  height: inherit;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SectionTitle = styled.h3`
margin: 2rem 0;
display: flex;
color: ${({ theme }) => theme.colors.primaryThree};
font-size: ${({ theme }) => theme.typography.h3.size};
 line-height: ${({ theme }) => theme.typography.h3.line};
  font-weight: ${({ theme }) => theme.typography.h3.weight};
 align-self: ${({ alignSelf }) => (alignSelf ? alignSelf : 'center')};
 @media ${({ theme }) => theme.breakpoints.lg} {
    align-self: center;
  }

`
export const SectionContent = styled.div`
 display: flex;
 flex-direction: ${({ direction }) => (direction ? direction : 'row')};
 @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: column;
  }

`
export const SectionPane = styled.div`
 display: flex;
  height: fit-content;
  flex-direction: column;
  width: 100%;
  margin: auto;
  & > * {
    flex-grow: 1;
  }
  ${({ left }) =>
  left &&
  css`
      padding-right: 5rem;
      @media ${({ theme }) => theme.breakpoints.lg} {
        padding-right: 2rem;
      }
      @media ${({ theme }) => theme.breakpoints.md} {
        padding-right: 0;
        margin-bottom: 3rem;
      }
    `}
  ${({ center }) =>
  center &&
  css`
      justify-content: center;
    `}  
  ${({ right }) =>
  right &&
  css`
      padding-left: 5rem;
      @media ${({ theme }) => theme.breakpoints.lg} {
        padding-left: 2rem;
      }
      @media ${({ theme }) => theme.breakpoints.md} {
        padding-left: 0;
        margin-bottom: 3rem;
      }
    `}
  
`
export const SectionText = styled.p`
 font-size: ${({ theme }) => theme.typography.h5.size};
  line-height: ${({ theme }) => theme.typography.h5.line};
  margin-bottom: 3.5rem;
`
export const SectionImage = styled.img`
max-width: 100%;
 border: .2rem solid ${({ theme }) => theme.colors.primaryTwo};
  border-radius: 1rem;
`
