import axios from 'axios'

export function increment() {
  return { type: 'INCREMENT' }
}

export function decrement() {
  return { type: 'DECREMENT' }
}

export function setCounter(number) {
  return { type: 'SET_COUNTER', payload: number }
}

export function setPokemonName(name) {
  return { type: 'SET_POKEMON_NAME', payload: name }
}

export const fetchPokemon = (pokemonNumber) => async (dispatch) => {
  const response = await axios({
    url: `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`,
    method: 'GET'
  })

  const { name, id } = response.data
  dispatch(setPokemonName(name))
  dispatch(setCounter(id))
}