import React from "react"
import styled from "styled-components"

import { Switch, Route } from "react-router-dom"

import Add from "./home/add"
import Device from "./home/device"
import FromBP from "./home/fromBP50"

const StyledMain = styled.main`
  margin: 0 0 auto 0;
`

const Main = () => (
  <StyledMain>
    <Switch>
      <Route exact path="/">
        <Device />
      </Route>
      <Route exact path="/add">
        <Add />
      </Route>
      <Route exact path="/fromBP">
        <FromBP />
      </Route>
    </Switch>
  </StyledMain>
)

export default Main
