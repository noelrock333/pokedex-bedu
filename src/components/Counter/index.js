import CounterStyled from "./style"
import { useSelector } from 'react-redux'

function Counter() {
  const counter = useSelector(store => store.counter)
  return (
    <CounterStyled>#{counter}</CounterStyled>
  )
}

export default Counter