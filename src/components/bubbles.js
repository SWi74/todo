import styled, { css } from "styled-components"

const Bubbles = css`
  font: inherit;
  padding: 10px;
  border-radius: 5px;
  height: 44px;
  border: 1px solid ${props => props.theme.colors.grey};
  :focus {
    outline: none;
  }
`
export const StyledInput = styled.input`
  ${Bubbles};
`
export const StyledButton = styled.button`
  ${Bubbles};
  background: ${props => props.theme.colors.grey};
  color: ${props => props.theme.colors.dark};
  border: 1px solid ${props => props.theme.colors.grey};
`