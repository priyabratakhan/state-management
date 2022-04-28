import { useState } from "react";
import { Todoinput } from "./Todoinput";

const Todo = ()=>{
    const [todoList, setTodoList] = useState(["learn react","redux"]);
    const getData = (todo)=>{
        // console.log("received", todo)
        setTodoList([...todoList,todo])
    }
    return <div>
        <Todoinput getData={getData}/>
        {todoList.map((e)=>(
            <div>{e}</div>
        ))}
    </div>
}

export {Todo};