import styled from "styled-components"


export const Section = styled.section`
  padding: 0 0 56px 0;
`
export const Table = styled.div`
  > div:nth-child(even) {
    background: ${props => props.theme.colors.lightbgalt};
  }
`
export const SpecGroup = styled.div`
  display: grid;
`
export const Row = styled.div`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 3px;
  border-bottom: 1px solid ${props => props.theme.colors.shadow};
  border-top: 1px solid ${props => props.theme.colors.highlight};
  > span {
    align-self: flex-start;
  }
`
export const HeadRow = styled.div`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 6px;
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.light};
  position: sticky;
  top: 0;
  z-index: 1;
  border-bottom: 1px solid ${props => props.theme.colors.shadow};
  border-top: 1px solid ${props => props.theme.colors.highlight};
`
export const ViewRow = styled.div`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 6px;
  background: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.light};
  position: sticky;
  top: 58px;
  z-index: 1;
  border-bottom: 1px solid ${props => props.theme.colors.shadow};
  border-top: 1px solid ${props => props.theme.colors.highlight};
`
export const ValWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`
export const ValueLine = styled.div`
  display: flex;
  min-height: 44px;
  gap: 6px;
  align-items: center;
  flex-wrap: wrap;
`
export const Para = styled.span`
  position: sticky;
  top: 116px;
  display: flex;
  gap: 16px;
  min-height: 44px;
  align-items: center;
  justify-content: flex-end;
  margin: 0 0 0 auto;
  svg {
    fill: ${props => props.theme.colors.primary};
  }
  > span {
    font-weight: bold;
  }
`

