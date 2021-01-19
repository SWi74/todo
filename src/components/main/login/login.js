import React from "react"

import { NormalPlate, Section, GridWrap, Label } from "../../common/wrappers"
import { Title, Alert } from "../../common/texts"
import { StyledButton, StyledInput, TextButton } from "../../common/bubbles"
import ReCap from "../../common/reCaptcha"

const Login = () => (
    <Section slim>
        <Title>Log In</Title>
        <NormalPlate slim>
            <GridWrap cols={[1, 1, 1]}>
                <Label>
                    <span>Email</span>
                    <StyledInput value="sgeorgiev@datecs.bg" />
                </Label>
                <Label>
                    <span>Password</span>
                    <StyledInput value="••••••••" />
                </Label>
                <ReCap />
                <Alert className="neg">Wrong email address or password.</Alert>
                <a href="/">
                    <StyledButton>Log In</StyledButton>
                </a>
                <a href="/reset">
                    <TextButton className="change">Forgotten password?</TextButton>
                </a>
            </GridWrap>
        </NormalPlate>
    </Section>
)

export default Login