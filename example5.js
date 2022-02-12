import React,{useState,useEffect} from "react"

function EffectsDemo1() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(()=> {
        console.log('Updating Document Title')
        document.title = `Clicks ${count}`  
    },[]) //run useEffect only once

    // useEffect(()=>{
    //     console.log('Updating Document Title')
    //     document.title = `Clicks ${count}`
    // }, [count]) //run useEffect only when count changes

    return (
        <div>
            <input type="text" 
                value={name} onChange={(e) => setName(e.target.value)}>
            </input>

            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click Here
            </button>
        </div>
    )
}
export default EffectsDemo1