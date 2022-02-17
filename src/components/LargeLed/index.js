import LargeLedStyled from "./style"

function LargeLed(props) {
    return (
        <LargeLedStyled color={props.color}>
            <div className="led">
                <div className="brigth"></div>
            </div>
        </LargeLedStyled>
    )
}

export default LargeLed