import styled from 'styled-components'

const LargeLedStyled = styled.div`
    display: inline-flex;
    background-color: white;
    padding: 3px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid black;
    margin: 20px;
    .led {
        width: 60px;
        height: 60px;
        border: 2px solid black;
        border-radius: 50%;
        background-color: ${props => props.color};
        position: relative;
    }
    .brigth {
        width: 20px;
        height: 20px;
        background-color: white;
        border-radius: 50%;
        position: absolute;
        top: 9px;
        left: 9px;
        opacity: 0.6;
    }
`

export default LargeLedStyled