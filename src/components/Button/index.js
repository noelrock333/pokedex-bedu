import ButtonStyled from './style'

function Button(props) {
    return (
        <ButtonStyled fondo={props.fondo} >
            Soy un boton
            <div className="icon"></div>
        </ButtonStyled>
    )
}

export default Button