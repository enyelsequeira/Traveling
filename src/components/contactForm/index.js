import React, { useState } from "react"
import emailjs from "emailjs-com"
import letter from "../../images/letter.svg"
import {
  ContactForm,
  ContainerContact1,
  Contact1Pic,
  Contact1Picture,
  Contact1Form,
  Contact1FormTitle,
  WrapInput1,
  Input1,
  ShadowInput,
  ContainerContact1FormBtn,
  Contact1FormBtn,
  Title,
  InputTextArea,
} from "./styles/contactForm"

const initialValues = {
  name: "",
  subject: "",
  email: "",
  message: "",
}

const IndexForm = props => {
  const [values, setValues] = useState(initialValues)

  const handleChange = e => {
    const name = e.target.name

    setValues({ ...values, [name]: e.target.value })
  }

  const sendEmail = async e => {

    e.preventDefault()
    try {
      await emailjs.sendForm(
        "service_16pspkp",
        "template_lk4f9zg",
        e.target,
       "user_BZ6TELUu4kYqjUYYqHzta"

      )

      setValues(initialValues)
      alert("Your message has been sent.")
    } catch (error) {
      console.log(error, 8585)
    }
  }

  return (
    <>
      <Title>Get in Touch with us</Title>

      <ContactForm>
        <ContainerContact1>
          <Contact1Pic>
            <Contact1Picture src={letter} alt="IMG" />
          </Contact1Pic>

          <Contact1Form onSubmit={sendEmail}>
            <Contact1FormTitle> Get in touch </Contact1FormTitle>

            <WrapInput1>
              <Input1
                required
                value={values.name}
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Name"
              />
              <ShadowInput/>
            </WrapInput1>

            <WrapInput1>
              <Input1
                required
                value={values.email}
                onChange={handleChange}
                type="text"
                name="email"
                placeholder="Email"
              />
              <ShadowInput/>
            </WrapInput1>

            <WrapInput1>
              <Input1
                value={values.subject}
                onChange={handleChange}
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <ShadowInput/>
            </WrapInput1>

            <WrapInput1>
              <InputTextArea
                required
                value={values.message}
                onChange={handleChange}
                name="message"
                placeholder="Message"
             />
              <ShadowInput/>
            </WrapInput1>

            <ContainerContact1FormBtn>
              <Contact1FormBtn type="submit" value="save">
                <span> Send Email </span>
              </Contact1FormBtn>
            </ContainerContact1FormBtn>
          </Contact1Form>
        </ContainerContact1>
      </ContactForm>
    </>
  )
}

export default IndexForm
