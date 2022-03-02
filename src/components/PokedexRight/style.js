import styled from 'styled-components'

const PokedexRightStyled = styled.div`
  min-height: 400px;
  max-width: 400px;
  width: 100%;
  padding-top: 78px;
  padding-bottom: 20px;
  .pokedex-tab {
    width: 100%;
    transform: scaleX(-1);
  }
  .wrapper {
    margin-top: -4px;
    background-color: #CE1C24;
    height: 500px;
  }
  .display-wrapper {
    display: flex;
    padding-left: 40px;
    flex-direction: column;
    justify-content: center;
  }
`

export default PokedexRightStyled