import PokedexLeftStyled from "./style"
import Led from '../Led'
import PokedexLine from '../../assets/pokedex-line.svg'

function PokedexLeft() {
    return (
        <PokedexLeftStyled>
            <Led color="#FA2200" />
            <Led color="#FBCB65" />
            <Led color="#32CB65" />
            <img className="pokedex-line" src={PokedexLine} />
        </PokedexLeftStyled>
    )
}

export default PokedexLeft