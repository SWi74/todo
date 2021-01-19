import React from "react"
import styled from "styled-components"

import { bool, func } from 'prop-types'

const StyledBurger = styled.button`
  display: flex;
  padding: 10px 16px;
  margin: 0 calc(3vw - 16px) 0 0;
  background: transparent;
  border: 0;
  cursor: pointer;
  flex-shrink: 0;
  :focus {
    outline: 0;
  }
  svg {
    fill: ${props => props.theme.colors.light};
  }
  @media (min-width: 730px) {
    display: none;
  }
`

const Burger = ({ open, setOpen }) => (
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
    <svg width="18px" x="0px" y="0px" viewBox="0 0 22 22">
      <rect y="10" width="22" height="2"/>
      <rect x="7" y="0" width="15" height="2"/>
      <rect x="3" y="20" width="19" height="2"/>
    </svg>
  </StyledBurger>
)

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Burger
