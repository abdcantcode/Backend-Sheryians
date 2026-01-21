const express=require("express")
const app=express() //Creating a server instance

app.get('/',(req,res)=>{
  res.send("Hello World")
})

app.get('/about',function(req,res){
  res.send("This is the about page")
})

app.get('/home',(req,res)=>{
  res.send("This is the home page")
})

app.listen(3000) //Starting the server