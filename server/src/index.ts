import express , {Request , Response} from "express";
import * as dotenv from "dotenv"
import mongoose from "mongoose";
import DeckModel from "./models/Deck";

dotenv.config({ path: "src"+'/.env' });
const app = express()

const PORT = process.env.PORT

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
mongoose.connect(process.env.MONGO_URL!)
.then(()=>{
    console.log(`listerning on port ${PORT}`) 
    app.listen(PORT)
})