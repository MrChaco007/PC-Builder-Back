///////////////////////////
// Environmental Variables
///////////////////////////
require("dotenv").config();
const { PORT, NODE_ENV = "development" } = process.env;
const mongoose = require("./db/connection");

//CORS
const cors = require("cors");
//Bringing in Express
const express = require("express");
const app = express();

//OTHER IMPORTS
const morgan = require("morgan");
const buildRouter = require("./controllers/build")
const userRouter = require("./controllers/user")
////////////
//MIDDLEWARE
////////////
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("tiny")); //logging

///////////////
//Routes and Routers
//////////////
app.get("/", (req, res) => {
  res.json({ msg: "hello world" });
});

//Use Build and User Routes for default routes
app.use("/build", buildRouter)
app.use("/user", userRouter)

//LISTENER
app.listen(PORT, () => {
  console.log(`Your are listening on port ${PORT}`);
});
