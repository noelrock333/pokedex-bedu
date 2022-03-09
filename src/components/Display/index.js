import DisplayStyled, { ScreenStyled } from "./style";
import { useSelector } from 'react-redux'

function Display() {
  const pokemon = useSelector(store => store.pokemon)
  return (
      <DisplayStyled>
          <div className="red-dots-row">
              <div className="red-dot" />
              <div className="red-dot" />
          </div>
          <ScreenStyled>
            {pokemon?.sprites && <img src={pokemon.sprites.front_default} />}
          </ScreenStyled>
      </DisplayStyled>
  )
}

export default Display