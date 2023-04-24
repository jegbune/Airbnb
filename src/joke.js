import React from "react"

function Joke(props) {
    return (
        <div>
            {/* <h3 style={{display: props.setup ? "block" : "none"}}> Setup: {props.setup}</h3> */}
            {props.setup && <h3>{props.setup}</h3>}
            <p>{props.punchline}</p>
            <hr />
        </div>
    )
}
export default Joke