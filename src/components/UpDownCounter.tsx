import React, { useState } from "react";
import './UpDownCounter.css'

function UpDownCounter() {
    const [count, setCount] = useState(0);

    return (
        <div id="UpDownCounter">
            <div id="CounterContainer">
                <button id="up" onClick={() => setCount((count) => count + 1)}>
                    Up
                </button>
                <p>{count}</p>
                <button id="down" onClick={() => setCount((count) => count - 1)}>
                    Down
                </button>
            </div>
        </div>
    )
}


export default UpDownCounter