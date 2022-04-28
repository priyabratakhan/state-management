import { useState } from "react";

export const Todoinput = ({getData})=>{
    const [text, setText] = useState("");
    return (
        <div>
            <input onChange={(e)=>{
                setText(e.target.value)
                // console.log(e.target.value);
            }} type="text" placeholder="Enter todo" />
        <button onClick={()=>{
            getData(text)
        }}>Add</button>
        </div>
    )
}