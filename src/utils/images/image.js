import React, {useRef} from "react"
import { SingleImage } from "../../components/blogImagesCarrousel/styles/blogImagesCarrousel"


const Image = ({index, image, show}) => {
  const imageRef = useRef();

return ( <SingleImage
  ref={imageRef}
  onClick={show}
  src={image}
  alt={index}
  width="100%"
  height="auto"
  crossOrigin="anonymous"
/>
)
}

export default Image