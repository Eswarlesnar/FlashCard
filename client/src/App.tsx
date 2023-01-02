import React, {  useState , useEffect} from 'react'
import {motion} from "framer-motion"
import Form from "./components/Form"
import Card from "./components/Card"

import './App.css'

function App() {
  
  const [topics , setTopics] = useState([])
  interface Topic{
    "_id" : string,
    "title" : string, 
    "__v" : number,
  }

  useEffect( () => {
    const fetchTopics = async () =>{
      let response =  await fetch("http://localhost:5000/decks", {
        headers : {
          "Content-Type" : "application/json"
        } 
      })
      const data = await response.json()
      console.log(data)
      setTopics(data)
    }
    fetchTopics()
  } , [])
  return (
    <div className="App">
       <> 
          <div>
             {!topics ? "no topic addded yet" : topics.map((topic:Topic)=> {
                return <Card id = {topic._id}  key = {topic._id} title = {topic.title}/>
             })}
             
          </div>

       </>
        <Form />

    </div>
  )
}

export default App
