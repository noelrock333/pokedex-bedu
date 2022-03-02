import PokedexLeftStyled from "./style"
import Led from '../Led'
import LargeLed from '../LargeLed'
import PokedexLine from '../../assets/pokedex-line.svg'
import Display from '../Display'
import Controls from '../Controls'

function PokedexLeft() {
    return (
        <PokedexLeftStyled>
            <div className="leds-group">
                <LargeLed color="#3298CB" />
                <div className="leds-row">
                    <Led color="#FA2200" />
                    <Led color="#FBCB65" />
                    <Led color="#32CB65" />
                </div>
            </div>
            <img className="pokedex-line" src={PokedexLine} />
            <div className="display-wrapper">
                <Display />
            </div>
            <Controls />
        </PokedexLeftStyled>
    )
}

export default PokedexLeft