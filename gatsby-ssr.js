import React from "react"
import Default from "./src/themes/default"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./src/utils/global-styles"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Default}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
