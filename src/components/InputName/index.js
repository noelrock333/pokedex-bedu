import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPokemon } from '../../store/actions'

function InputName() {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (ev) => {
    ev.preventDefault()
    dispatch(fetchPokemon(name))
    setName('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Número de pokemon" value={name} onChange={(ev) => setName(ev.target.value)} />
    </form>
  )
}

export default InputName