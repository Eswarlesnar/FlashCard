import {motion} from "framer-motion"
import React, {  useState } from 'react'
const Form = ()=>{
    const [title, settitle] = useState<string>("")
    const handleDeckSubmit = async (e : React.FormEvent) =>{
        e.preventDefault()
        if(title.length < 3){
          return 
        }
        await fetch("http://localhost:5000/decks", {
         method : "POST" ,
         body : JSON.stringify({
           title
         }),
         headers : {
           "Content-Type" : "application/json"
         } 
        })
        settitle("")
     }
    return <form onSubmit = {handleDeckSubmit}>
          <label htmlFor='deck'></label>
          <input 
           type ="text"
           placeholder = "Creata a topic" 
           value = {title} 
           onChange = {(e:React.ChangeEvent<HTMLInputElement>) => settitle(e.target.value)}/>
           <motion.button 
           whileHover={{scale : 1.02}}
           whileTap = {{scale : 0.95}}
           >Create</motion.button>
       </form>
}

export default Form