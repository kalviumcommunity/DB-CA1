const express=require("express")
const mongoose=require("mongoose")
const app=express();
const port=5000;
require("dotenv").config();
app.use(express.json())

mongoose
.connect(process.env.mongo_uri)
.then(()=>console.log("mongodb connected"))
.catch((err)=>console.log("error running",err))

const book=mongoose.model(
    "book",
    new mongoose.Schema({
        title:String,
        author:String,
        year:Number,
    })
)

const member=mongoose.model(
    "member",
    new mongoose.Schema({
        name:{type:String,required:true},
        email:{type:String,required:true},
        phonenumber:{type:Number,required:true},
    })
)

app.get("/",(req,res)=>{
    res.send("library api running")
})
        
app.get("/books",async(req,res)=>{
    const book=awaitbook.find()
    res.json(book)
})

app.post("/books",async(req,res)=>{
    const book=new book(req.body)
    awaitbook.save();
    res.json(book)
})

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})