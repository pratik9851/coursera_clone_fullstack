const express=require("express")




const connect= require("./config/db")








const app=express()

app.use(express.json());








    

app.listen(2355,async ()=>{
     await connect();
    console.log("listing to port 2345");
})