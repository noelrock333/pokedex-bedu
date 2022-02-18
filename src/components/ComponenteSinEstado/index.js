import { useState } from 'react'

// Stateless component
function ComponenteSinEstado(props) {
    let [name, setName] = useState('Usuario')
    let [age, setAge] = useState(31)
    let [color, setColor] = useState(props.color)
    return (
        <div style={{ color: color }}>
            <h1>Stateless component (usando funciones)</h1>
            Hola mundo, {name} tienes {age}
            <br></br>
            <input type="text" placeholder="Pon tu nombre aquí" onChange={(event) => setName(event.target.value)}  />
            <input type="text" placeholder="Agrega un color" onChange={(ev) => setColor(ev.target.value)} />
        </div>
    )
}

export default ComponenteSinEstado
