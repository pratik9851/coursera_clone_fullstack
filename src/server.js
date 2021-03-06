const express = require("express");
const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");


const connect = require("./config/db");


const Signup = require("./models/signup.model");

const signupcontroller = require("./controllers/signupData");


const courseController=require("./controllers/course.controller")



const app = express();

app.use(express.json());
app.use(cors());
app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

var userName;
var purshasesStatus;

app.get("/afterLogin", (req, res) => {
    userName = req.query.name;
    var user = req.query.name;
    res.render("afterlogin", {
        name: req.query.name,
        user
    });
})

app.get("/allcourse", (req, res) => {
    userName = req.query.name;
    res.render("allCourse", {
      name: req.query.name,
    });
})


app.get("/courseDetail", (req, res) => {
    res.render("course-detail.ejs", {
      name: userName,
    });
})


app.get("/goToAfterLogin", (req, res) => {
    res.render("afterlogin", {
      name: userName,
    });
})

app.get("/myPurchase", (req, res) => {
    purshasesStatus = req.query.purched;
    res.render("myPurchase.ejs", {
      name: userName,
    });
})



app.get("/logout", (req, res) => {
    
    res.render("home.ejs");
})


app.get("", (req, res) => {
    res.render("home.ejs");
})

app.get("/statusFlag", async function (req, res) {
    
    try {
        return res.send({status:purshasesStatus});
    }
    catch {
        return res.send(err.message);
    }
});

app.use("/courses",courseController)

app.use("/users", signupcontroller);

app.listen(process.env.PORT || 2355, async () => {
    await connect();
    console.log("listening to port 2355");
});

