import styled from "styled-components"

export const ContactForm = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 15px;
  background: ${props => props.theme.colors.background1};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`

export const ContainerContact1 = styled.div`
border: 1px solid red;

  width: 1163px;
  background: ${props => props.theme.colors.primaryTwo};
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 5rem;
  @media (max-width: 992px) {
  padding: 4rem;
  }
  @media (max-width: 768px) {
    padding: 90px 80px 88px 80px;
  }
  @media (max-width: 576px) {
    padding: 90px 15px 88px 15px;
  } ;
`

export const Contact1Pic = styled.div`
  width: 296px;
  @media (max-width: 1200px) {
    width: 33.5%;
  }
  @media (max-width: 992px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`
export const Contact1Picture = styled.img`
  max-width: 100%;
  
`
export const Contact1Form = styled.form`
  width: 60%;
  @media (max-width: 1200px) {
    width: 44%;
  }
  @media (max-width: 992px) {
    width: 55%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Contact1FormTitle = styled.span`

  display: block;
  font-size: 24px;
  color: ${props => props.theme.colors.primaryThree};
  line-height: 1.2;
  text-align: center;
  padding-bottom: 44px;
`

export const WrapInput1 = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 20px;
  outline: none;
`
export const Input1 = styled.input`
  outline: none;

  text-align: left;
  display: block;
  height: 30px;
  width: 100%;
  border-radius: 10px;
  border: 2px solid ${props => props.theme.colors.accentTwo};
  background: ${props => props.theme.colors.primaryOne};
  font-size: 1.3rem;
  line-height: 1.5;
  color: ${props => props.theme.colors.primaryTwo};
`
export const InputTextArea = styled.textarea`
  outline: none;

  text-align: left;
  display: block;
  width: 100%;
  border-radius: 10px;
  border: 2px solid ${props => props.theme.colors.primaryTwo};
  background: ${props => props.theme.colors.primaryOne};
  font-size: 2rem;
  line-height: 1.5;
  color: ${props => props.theme.colors.primaryTwo};
`
export const ShadowInput = styled.span`
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 0px 0px;
  color: rgba(87, 184, 70, 0.5);
`
export const ContainerContact1FormBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const Contact1FormBtn = styled.button`
  min-width: 193px;
  height: 50px;
  font-size: 2rem;
  line-height: 1.5;
  background: ${props => props.theme.colors.primaryThree};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  transition: all 0.4s;
  border-radius: 0.5rem;
  border: 0.1rem solid ${props => props.theme.colors.accentOne};
  transition: 250ms;
  margin-top: 4rem;

  &:hover {
    box-shadow: inset 0 0 0 4px hsl(209, 99%, 16%);
    color: ${props => props.theme.colors.primaryTwo};
    cursor: pointer;
  }
`
export const Title = styled.h1`
  text-align: center;
  margin: 2rem 0;

  font-size: 5.5rem;
  color: ${props => props.theme.colors.accentTwo};
`
