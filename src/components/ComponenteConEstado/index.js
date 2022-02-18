import { Component } from 'react'

// Stateful component
class ComponenteConEstado extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Usuario',
            age: 21,
            color: this.props.color
        }
    }

    handleNameInputChange = (event) => {
        this.setState({ name: event.target.value })
    }

    handleColorInputChange = (event) => {
        this.setState({ color: event.target.value })
    }

    render() {
        const { name, age } = this.state
        return (
            <div data-id="" id="" className="" style={{ color: this.state.color }}>
                <h1>Stateful component (usando clases)</h1>
                Hola mundo, {name} tienes {age}
                <br></br>
                <input type="text" placeholder="Pon tu nombre aquí" onChange={this.handleNameInputChange} />
                <input type="text" placeholder="Escribe el color" onChange={this.handleColorInputChange}/>
            </div>
        )
    }
}

export default ComponenteConEstado