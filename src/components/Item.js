import styled from "styled-components"

const StyledItem = styled.div`
    width: 100%;
    padding: 1em;
    background: ${props => props.theme.colors.grey};
    color: ${props => props.theme.colors.dark};
    border: 1px solid ${props => props.theme.colors.grey};
    border-radius: 5px;
    gap: 10px;
    display: flex;
    align-items: center;
    svg {
        fill: ${props => props.theme.colors.dark};
        margin: 0 0 0 auto;
    }
`

const Item = () => (
    <StyledItem>
        <input type="checkbox"/>
        <span>1.</span>
        <span>Learn HTML</span>
        <svg width="14" viewBox="0 0 14 18">
            <path d="M6,19a2.006,2.006,0,0,0,2,2h8a2.006,2.006,0,0,0,2-2V7H6ZM19,4H15.5l-1-1h-5l-1,1H5V6H19Z" transform="translate(-5 -3)"/>
        </svg>
    </StyledItem>
)

export default Item
