import styled, { css } from 'styled-components'

const LedStyled = styled.div`
    width: 20px;
    height: 20px;
    border: 2px solid black;
    border-radius: 50%;
    background-color: ${props => props.color || 'red'};
    position: relative;
    .brigth {
        width: 8px;
        height: 8px;
        background-color: white;
        border-radius: 50%;
        position: absolute;
        top: 3px;
        left: 3px;
        opacity: 0.6;
    }
    
`

export default LedStyled