import React from "react"
import styled from "styled-components"

import Logo from "../common/logo"

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 3rem;
    a {
      color: ${props => props.theme.colors.light};
      white-space: nowrap;
      padding: 2rem;
    }
  }
`

export const Footer = () => (
  <StyledFooter>
    <nav>
      <a href="/">Datecs</a>
      <a href="/">Help</a>
      <a href="/">Contacts</a>
      <Logo />
    </nav>
  </StyledFooter>
)

export default Footer