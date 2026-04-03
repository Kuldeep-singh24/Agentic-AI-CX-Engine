const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

const Ticket=require("./models/Ticket");
const analyze=require("./aiEngine");

const app=express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/tickets");

app.post("/api/tickets",async(req,res)=>{

  const {text}=req.body;

  if(!text){
    return res.status(400).json({error:"Text required"});
  }

  const result=analyze(text);

  const ticket=await Ticket.create({
    text,
    ...result
  });

  res.json(ticket);

});

app.get("/api/tickets",async(req,res)=>{
  const tickets=await Ticket.find().sort({createdAt:-1});
  res.json(tickets);
});

app.listen(5000,()=>{
  console.log("Server running on 5000");
});