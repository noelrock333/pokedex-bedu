import LedStyled from "./styled"

function Led(props) {
    return (
        <LedStyled color={props.color}>
            <div className="brigth"></div>
        </LedStyled>
    )
}

export default Led