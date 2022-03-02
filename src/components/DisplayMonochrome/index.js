import DisplayMonochromeStyled from "./style"
import { useSelector } from 'react-redux'

function DisplayMonochrome() {
  const name = useSelector(store => store.name)
  return (
    <DisplayMonochromeStyled>
      <label>Pokemon: {name}</label>
      <br></br>
      <label>Weight: 23kg</label>
    </DisplayMonochromeStyled>
  )
}

export default DisplayMonochrome