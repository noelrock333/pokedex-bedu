import styled from 'styled-components'

const DisplayStyled = styled.div`
    border: 2px solid black;
    background-color: white;
    border-bottom-left-radius: 40px;
    height: 240px;
    width: 300px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .red-dots-row {
        display: flex;
        margin-top: 10px;
        margin-bottom: 5px;
    }
    .red-dot {
        height: 7px;
        width: 7px;
        background-color: red;
        border: 1px solid black;
        border-radius: 50%;
        margin: 0 5px;
    }
`

export const ScreenStyled = styled.div`
    background-color: #4caf50;
    border: 1px solid black;
    width: 240px;
    height: 150px;
    margin-top: 10px;
    border-radius: 6px;
`

export default DisplayStyled