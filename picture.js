import React ,{useState,useEffect}from "react"
// import "./picture.css"
import EmojiData from "./emoji.json"

function Data(){
    const [search,setSearch]=useState("");
    const [display, setDisplay] = useState(true)
    const [data,setData]=useState([]);
    useEffect(()=>{
        const NewData=EmojiData.filter(emoji=>emoji.title.toLowerCase().includes(search.toLowerCase()))
        setData(NewData);
    },[search]) 
    const clickHandler = () => {
        setDisplay(true)
        // if (search.length > 0) {
        //     setDisplay(true)
        // }
        
        // setSearch(e.target.value )
    }
    return(
        <div className="App">
            <center>
            <h1>Emoji Search</h1>
            <input type="text" name="search" value={search} onChange={(e)=>setSearch(e.target.value )}/>
            <button className="search" onClick={clickHandler} disabled={false}>Search</button>
            </center>
            <div className="container">
                <div className="row p-3  justify-content-center mt-5 border shadow box mb-2" >
            { display && 
            data.slice(0,10).map((emoji)=> <div>
                <div className="p-2 mt-1 border shadow box mb-3 " style={{"width":"140px","height":"150px" ,"margin":"5px" ,"border":"1px"}}>
                    <div class="card-body p-3" onClick={()=>{navigator.clipboard.writeText(emoji.symbol);alert("Emoji Copy")}}>
                        <h6 className="title p-1" style={{"font-size":"14px"}}>{emoji.title}</h6>
                        <div className="symbol p-1" style={{"font-size":"50px"}}>{emoji.symbol} </div>
                     </div> 
                </div>
                
            </div>)}
            </div>
            </div>
        </div>
    )

}
export default Data