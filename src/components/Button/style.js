import styled from 'styled-components'

const ButtonStyled = styled.button`
    background-color: ${props => props.fondo};
    color: white;
    .icon {
        width: 10px;
        height: 10px;
        background-color: white;
    }
`

export default ButtonStyled

