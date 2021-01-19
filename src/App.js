import React from "react"

import Theme from "./Theme"
import GlobalStyle from "./GlobalStyle"

import Header from "./components/header/header"
import Main from "./components/main/main"
import Footer from "./components/footer/footer"

const App = () => (
  <Theme>
    <GlobalStyle />
    <Header />
    <Main />
    <Footer />
  </Theme>
)

export default App
