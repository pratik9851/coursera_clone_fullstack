const express = require("express");
const path = require("path");

const mongoose = require("mongoose");
const cors = require("cors");


const connect = require("./config/db");

const Signup = require("./models/signup.model");

const signupcontroller = require("./controllers/signupData");


const app = express();

app.use(express.json());
app.use(cors());
app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    console.log("hii form testing");
    console.log(req.query.name);
    res.render("afterlogin", {
      name: req.query.name,
    });
})


app.use("/users", signupcontroller);

app.listen(2355, async () => {
    await connect();
    console.log("listening to port 2355");
});