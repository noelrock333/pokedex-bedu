import styled from 'styled-components'

const PokedexLeftStyled = styled.div`
    background-color: #CE1C24;
    min-height: 400px;
    max-width: 400px;
    width: 100%;
    padding-bottom: 20px;
    .leds-group {
        display: flex;
    }
    .leds-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 20%;
        margin-top: 20px;
        margin-left: 20px;
    }
    .pokedex-line {
        width: 100%;
        margin-top: -55px;
    }
    .display-wrapper {
        display: flex;
        justify-content: center;
    }
`

export default PokedexLeftStyled
