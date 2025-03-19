import React from 'react'
import{useState} from "react";
export default function App6(){
    const[hobby,setHobby]=useState([]);
    const[text,setText]=useState();
    const handleSubmit=()=>{
        setHobby([...hobby,text]);
    };
    return(
   <div>  
    <p><input type="text" placeholder="Enter ur hobby" onChange={(event)=>setText(event.target.value)}></input>
    <button onClick={handleSubmit}>Add</button></p>
   </div>
    )
}