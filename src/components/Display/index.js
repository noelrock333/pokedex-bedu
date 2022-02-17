import DisplayStyled, { ScreenStyled } from "./style";

function Display() {
    return (
        <DisplayStyled>
            <div className="red-dots-row">
                <div className="red-dot" />
                <div className="red-dot" />
            </div>
            <ScreenStyled></ScreenStyled>
        </DisplayStyled>
    )
}

export default Display