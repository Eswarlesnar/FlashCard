import express , {Request , Response} from "express";
import mongoose from "mongoose";
import DeckModel from "./models/Deck";

const app = express()

app.use(express.json())

app.get("/" , (req :Request, res : Response) => {
    res.send("Hi welcome to your server")
})


mongoose.set("strictQuery" , false)

app.get("/hello" , (req :Request, res : Response) => {    
    res.send("Hello world")
})


app.post("/decks" , async (req : Request , res : Response) => {
    
    const deck = new DeckModel({
        title : req.body.title
    })
    const response = await deck.save()
    res.json(response)
})

app.get("/decks" , (req : Request , res :Response) => {
    res.send("See the decks")
})

mongoose.connect("mongodb+srv://Oruganti-E:OYjOjDC5DrwZl53E@cluster0.mmfayp2.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("listerning on port 5000") 
    app.listen(5000)
})
