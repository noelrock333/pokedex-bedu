const initialState = {
  counter: 0,
  name: '',
  pokemon: null
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case 'INCREMENT': {
      return {
        ...state,
        counter: state.counter + 1
      }
    }
    case 'DECREMENT': {
      return {
        ...state,
        counter: state.counter - 1
      }
    }
    case 'RESET': {
      return {
        ...state,
        counter: 0
      }
    }
    case 'SET_COUNTER': {
      return {
        ...state,
        counter: Number(payload)
      }
    }
    case 'SET_POKEMON_NAME': {
      return {
        ...state, // counter: 0, name: ''
        name: payload,
      }
    }
    case 'SET_POKEMON': {
      return {
        ...state, // counter: 0, name: ''
        pokemon: payload,
      }
    }
    default: {
      return state
    }
  }
}

export default reducer