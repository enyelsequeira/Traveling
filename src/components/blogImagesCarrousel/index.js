import React, {useState} from "react"

import { AnimatePresence, AnimateSharedLayout} from "framer-motion"
import Image from "../../utils/images/image"
import {
  CloseBtn,
  Container,
  ImageContainer,
  ModalImage,
  ModalInside,
  ModalSection
} from "./styles/blogImagesCarrousel"



// const ImageWrapper = styled(motion.custom(Img))`
// border: 1px solid green;
// `

const BlogImagesCarrousel = ({ images }) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <Container>
      <AnimateSharedLayout>
      {images === null ? <p>sorry Not Images Yet </p> : images.map((image, index)=>{
        // console.log(index, 5555)
        return (
          <ImageContainer key={image.id}>
              <Image
                show={() => setShowPreview([index])}
                image={image.fluid.src}
                index={index}
                alt={image.title}
              />
          </ImageContainer>
        )
      })}

        <AnimatePresence>
          {showPreview && (

            <ModalSection
              layoutId={showPreview}
              exit={{ opacity: 0, rotate: 360, transition: { duration: 1 } }}
              onClick={() => setShowPreview(false)}
            >
              <CloseBtn onClick={()=> setShowPreview(false)}>X</CloseBtn>
              <ModalInside>
                <ModalImage
                  fluid={images[showPreview].fluid}
                />
              </ModalInside>
            </ModalSection>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </Container>
  )
}

export default BlogImagesCarrousel