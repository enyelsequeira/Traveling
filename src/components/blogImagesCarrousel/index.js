import React from "react"

import styled from "styled-components"
import Img from "gatsby-image"
import {  motion } from "framer-motion"

const Container = styled.div`
width: 100%;
margin: 2rem auto;
  text-align: center;
  display: grid;
   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  &:hover {
    cursor: pointer;
  }
`


// const ImageWrapper = styled(motion.custom(Img))`
// border: 1px solid green;
// `

const ImageContainer = styled(motion.div)`

`
const ImageWrapper = styled(Img)`
border: 1px solid green;
`


const BlogImagesCarrousel = ({ images }) => {


  return (
    <Container>
      {images === null ? <p>sorry Not Images Yet </p> : images.map((image)=>{
        return (
          <ImageContainer key={image.id}>
              <ImageWrapper
                fluid={image.fluid}
                alt={image.title}
              />
          </ImageContainer>

        )
      })}


    </Container>
  )
}

export default BlogImagesCarrousel