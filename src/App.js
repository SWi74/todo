import React from "react"

import Theme from "./Theme"
import GlobalStyle from "./GlobalStyle"

import Main from "./components/main/main"

const App = () => (
  <Theme>
    <GlobalStyle />
    <Main />
  </Theme>
)

export default App
