import LedStyled from "./styled"

function Led(props) {
    return (
        <LedStyled color={props.color} size={props.size}>
            <div className="brigth"></div>
        </LedStyled>
    )
}

export default Led