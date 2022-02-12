import React,{useState} from "react"
function HookCounter3() {

    const [name, setName] = useState({firstName: '', lastName: ''})

    return (
        <div>
            <form>
                
                <input 
                type="text" 
                value={name.firstName} 
                onChange={e=> setName({firstName: e.target.value}) } />

                <input 
                type="text" 
                value={name.lastName} 
                onChange={e=> setName({lastName: e.target.value}) } />
                <input type="text"
                // value={name}
                onChange={e=> setName({...name, firstName: e.target.value}) } />

                <h2>The firstname is:{name.firstName}</h2>
                <h2>The lastname is: {name.lastName}</h2>
            </form>
        </div>
    )
}
export default HookCounter3