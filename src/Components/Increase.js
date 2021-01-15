import React, { useState } from "react";
function Increase() {
    const [count, setCount] = useState(0);
    function increase() {
        setCount(count + 1);
    }
    return (
        <div style={{ margin: '50px', backgroundColor: 'skyblue' }}>
            <h1 style={{ color: 'red' }}></h1>
            <h3>Booking details</h3>
            <h2>{count}</h2>
            <button onClick={increase}>Add</button>
        </div>
    )
}
export default Increase;