import React from "react"
import styled from "styled-components"

import NoRobot from "../../files/noRobot.png"
import ReC from "../../files/reC.png"

const StyledReCap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    background: #f9f9f9;
    border: 1px solid #d3d3d3;
`

const ReCap = () => (
    <StyledReCap>
        <img src={NoRobot} alt="noRobot" />
        <img src={ReC} alt="reC" />
    </StyledReCap>
)

export default ReCap