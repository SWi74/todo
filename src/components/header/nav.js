import React from "react"
import styled from "styled-components"

import { Link, Switch, Route } from "react-router-dom"
import { bool } from 'prop-types'

const StyledNav = styled.div`
  display: ${({ open }) => open ? 'flex' : 'none'};
  flex-direction: column;
  position: fixed;
  text-align: center;
  top: 50px;
  width: 100%;
  background: ${props => props.theme.colors.tetrary};
  a {
    color: ${props => props.theme.colors.light};
    white-space: nowrap;
    padding: 32px;
  }
  @media (min-width: ${props => props.theme.media.second}) {
    position: static;
    background: transparent;
    margin: 0 calc(3vw - 16px) 0 0;
    height: auto;
    display: flex;
    flex-direction: row;
    width: auto;
    a {
      padding: 10px 16px;
    }
  }
`

// Add click anywhere else to close function with hooks and ref

const Nav = ({ open }) => (

  <StyledNav open={open}>
    <Switch>
      <Route exact path="/login">
        <Link to="/login">Log In</Link>
      </Route>
      <Route path="/">
        <Link to="/">Device</Link>
        <Link to="/add">Add</Link>
        <Link to="/fromBP">Loaded Values</Link>
      </Route>
    </Switch>
  </StyledNav>

)

StyledNav.propTypes = {
  open: bool.isRequired,
}

export default Nav
