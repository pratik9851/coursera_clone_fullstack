const express = require("express");
const path = require("path");

const mongoose = require("mongoose");
const cors = require("cors");


const connect = require("./config/db");

<<<<<<< HEAD
const Signup = require("./models/signup.model");

const signupcontroller = require("./controllers/signupData");
=======

const connect= require("./config/db")

const courseController=require("./controllers/course.controller")

>>>>>>> 5a55566ed76971a8be54ca5152012eb54dae22cf


const app = express();

app.use(express.json());
app.use(cors());
app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

<<<<<<< HEAD
app.get("/", (req, res) => {
    console.log("hii form testing");
    console.log(req.query.name);
    res.render("afterlogin", {
      name: req.query.name,
    });
})

=======
app.use("/courses",courseController)
>>>>>>> 5a55566ed76971a8be54ca5152012eb54dae22cf

app.use("/users", signupcontroller);

<<<<<<< HEAD
app.listen(2355, async () => {
    await connect();
    console.log("listening to port 2355");
});
=======



    

app.listen(2355,async ()=>{
     await connect();
    console.log("listing to port 2355");
})
>>>>>>> 5a55566ed76971a8be54ca5152012eb54dae22cf
