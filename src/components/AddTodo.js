import React from "react"

import { Flex } from "./wrappers"
import { StyledInput, StyledButton } from "./bubbles";

const AddTodo = () => (
    <Flex>
        <StyledInput />
        <StyledButton>Add</StyledButton>
    </Flex>
)

export default AddTodo