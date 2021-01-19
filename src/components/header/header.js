import React, { useState } from "react"
import styled from "styled-components"

import Logo from "../common/logo"
import Burger from "./burger"
import Nav from "./nav"

const StyledHeader = styled.header`
  background: ${props => props.theme.colors.primary};
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`



function Header() {
  const [open, setOpen ] = useState(false)

  return (
    <StyledHeader>
      <Logo />
      <Burger open={open} setOpen={setOpen} />
      <Nav open={open} setOpen={setOpen} />
    </StyledHeader>
  )
}

export default Header
