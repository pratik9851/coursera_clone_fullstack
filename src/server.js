const express = require("express");
const path = require("path");

const mongoose = require("mongoose");
const cors = require("cors");


const connect = require("./config/db");

<<<<<<< HEAD
=======

>>>>>>> 1881829092292e50b4f786e94899e045e6358cc1
const Signup = require("./models/signup.model");

const signupcontroller = require("./controllers/signupData");


const courseController=require("./controllers/course.controller")



const app = express();

app.use(express.json());
app.use(cors());
app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

<<<<<<< HEAD
var userName;

app.get("/", (req, res) => {
    console.log("hii form testing");
    console.log(req.query.name);
    userName = req.query.name;
    var user = req.query.name;
    res.render("afterlogin", {
        name: req.query.name,
        user
    });
})

app.get("/allcourse", (req, res) => {
    console.log("hii form allcourse");
    console.log(req.query.name);
    userName = req.query.name;
    res.render("allCourse", {
      name: req.query.name,
    });
})


app.get("/courseDetail", (req, res) => {
    console.log("hii form course-detail");
    console.log(userName);
    res.render("course-detail.ejs", {
      name: userName,
    });
})




=======
>>>>>>> 1881829092292e50b4f786e94899e045e6358cc1
app.use("/courses",courseController)

app.use("/users", signupcontroller);

<<<<<<< HEAD
app.listen(2355, async () => {
    await connect();
    console.log("listening to port 2355");
});
=======
>>>>>>> 1881829092292e50b4f786e94899e045e6358cc1



    

<<<<<<< HEAD
=======
app.listen(2355,async ()=>{
     await connect();
    console.log("listing to port 2355");
})
>>>>>>> 1881829092292e50b4f786e94899e045e6358cc1

