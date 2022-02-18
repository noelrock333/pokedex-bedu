import LedStyled from "./styled"

function Led(props) {
    return (
        <div className="led" style={{ backgroundColor: props.color }}>
            <div className="brigth"></div>
        </div>
    )
}

export default Led