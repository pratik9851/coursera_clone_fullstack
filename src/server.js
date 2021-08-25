const express=require("express")





const connect= require("./config/db")

const courseController=require("./controllers/course.controller")








const app=express()

app.use(express.json());


app.use("/courses",courseController)





    

app.listen(2355,async ()=>{
     await connect();
    console.log("listing to port 2355");
})