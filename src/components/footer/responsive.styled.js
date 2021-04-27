import styled from "styled-components"

export const CollapseExpand = styled.ul`
    @media (max-width: 800px) {
        li {
            display: ${({ open }) => open ? 'inline' : 'none'};
        }
    }
`