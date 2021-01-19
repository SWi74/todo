import React from "react"

import { NormalPlate, Section, GridWrap, Label } from "../../common/wrappers"
import { Title, Alert } from "../../common/texts"
import { StyledButton, StyledInput } from "../../common/bubbles"
import ReCap from "../../common/reCaptcha"

const Reset = () => (
    <Section slim>
        <Title>Reset Password</Title>
        <NormalPlate slim>
            <GridWrap cols={[1, 1, 1]}>
                <Label>
                    <span>Email</span>
                    <StyledInput value="sgeorgiev@datecs.bg" />
                </Label>
                <p>Please, enter your registered e-mail address. You will receive a link for resetting your password.</p>
                <ReCap />
                <Alert className="neg">Email address not registered.</Alert>
                <StyledButton>Send</StyledButton>

            </GridWrap>
        </NormalPlate>
    </Section>
)

export default Reset