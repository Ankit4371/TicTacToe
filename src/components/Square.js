import React from 'react'
import "../App.css";

function Square({ val, chooseSquare }) {
    return (
        <div className="sqaure" onClick={chooseSquare}>
            {val}
        </div>
    )
}

export default Square