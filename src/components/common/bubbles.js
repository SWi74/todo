import styled, { css } from "styled-components"

const Bubbles = css`
  font: inherit;
  padding: 10px;
  border-radius: 5px;
  height: 44px;
  border: 1px solid ${props => props.from ? props.theme.colors.accent : props.theme.colors.primary};
  box-shadow: inset 0 0 5px ${props => props.from ? props.theme.colors.accent : "transparent"};
  cursor: ${props => props.disabled ? "auto" : "pointer"};
  :focus {
    outline: none;
  }
`
export const StyledSelect = styled.select`
  ${Bubbles};
`
export const ShortInput = styled.input`
  ${Bubbles};
  max-width: 100px;
`
export const StyledInput = styled.input`
  ${Bubbles};
`
export const StyledButton = styled.button`
  ${Bubbles};
  display: flex;
  align-items: center;
  background: ${props => props.disabled ? props.theme.colors.grey : props.theme.colors.primary};
  color: ${props => props.theme.colors.light};
  border: 1px solid ${props => props.disabled ? props.theme.colors.grey : "initial"};
  svg {
    fill: ${props => props.theme.colors.light};
  }
`
export const BubbleSpan = styled.div`
  ${Bubbles};
  background: ${props => props.from ? props.theme.colors.light : "none"};
  background-image: ${props => props.bg ? "url(" + props.bg + ")" : "none"};
  background-size: cover;
  box-shadow: inset 0 0 5px ${props => props.from ? props.theme.colors.accent : "transparent"};
  display: flex;
  padding: ${props => props.from ? "10px" : "10px 10px 10px 0"};
  border: 1px solid ${props => props.from ? props.theme.colors.accent : "transparent"};
  gap: 10px;
  svg {
    fill: ${props => props.bg ? "transparent" : props.theme.colors.dark};
  }
  :hover {
    background-image: none;
    svg {
      fill: ${props => props.theme.colors.dark};
    }
  }
`
export const Image = styled.div`
  ${Bubbles};
  background-image: url(${props => props.bg});
  width: 44px;
  background-size: cover;
  border: 1px solid ${props => props.theme.colors.primary};
`
export const LoadedButton = styled.div`
  ${Bubbles};
  background: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.light};
  border: 1px solid ${props => props.theme.colors.accent};
  display: flex;
  gap: 10px;
  svg {
    fill: ${props => props.theme.colors.light};
  }
`
export const Label = styled.label`
  ${Bubbles};
  border: 1px solid ${props => props.from ? props.theme.colors.accent : props.theme.colors.primary};
  background: ${props => props.theme.colors.light};
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px;
  input {
    margin: 0;
    min-height: 10px;
  }
`
export const Upload = styled.button`
  ${Bubbles};
  color: ${props => props.theme.colors.primary};
  border: 1px dashed ${props => props.theme.colors.primary};
  width: 44px;
  svg {
    fill: ${props => props.theme.colors.dark};
  }
`
export const TextArea = styled.textarea`
  ${Bubbles};
  min-height: 44px;
  resize: none;
  height: initial;
`
export const Tooltip = styled.div`
  ${Bubbles};
  width: ${props => props.bg ? "200px" : "initial"};
  height: ${props => props.bg ? "200px" : "initial"};
  position: absolute;
  background: ${props => props.theme.colors.tetrary};
  color: ${props => props.theme.colors.dark};
  border: 1px solid ${props => props.bg ? "initial" : props.theme.colors.tetrary};
  background-image: ${props => props.bg ? "url(" + props.bg + ")" : "none"};
  background-size: cover;
`

export const Hover = styled.div`
  & ${Tooltip} {
    visibility: hidden;
  }
  :hover {
    & ${Tooltip} {
      visibility: initial;
    }
  }
`
