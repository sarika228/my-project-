import React, { useState, PureComponent } from 'react'

function HooksPreview() {
    const [count, setCount] = useState(1)

    return (
        <div>
            <h2> {count}</h2>
            <button onClick={()=>setCount(count + 1)}>
                Click Here
            </button>
        </div>
    )
}

export default HooksPreview
