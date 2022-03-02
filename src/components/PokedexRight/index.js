import PokedexRightStyled from "./style";
import PokedexTab from '../../assets/pokedex-tab.svg'
import DisplayMonochrome from '../DisplayMonochrome'
import Counter from '../Counter'

function PokedexRight() {
  return (
    <PokedexRightStyled>
      <img className="pokedex-tab" src={PokedexTab} />
      <div className="wrapper">
        <div className="display-wrapper">
          <DisplayMonochrome />
          <Counter />
        </div>
      </div>
    </PokedexRightStyled>
  )
}

export default PokedexRight