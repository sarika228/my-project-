import React,{useState,useEffect} from "react"
function EffectsDemo() {

    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title = `Clicks ${count}`
    })

    return (
        <div>
            <h4>{count}</h4>
            <button onClick={() => setCount(count + 1)}>
                Click Here
            </button>
        </div>
    )
}
export default EffectsDemo