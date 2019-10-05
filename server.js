// This is the main server file

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const routes = require("./routes/main.json");

require('dotenv').config();

// This is the only schema that needs to be stored in the database for now
const postSchema = mongoose.Schema({
        title : String,
        content : String,
        date : {type : Date, default: Date.now},
        visible : {type : Boolean, default: false},
        tags : {type : Array(String), default: []}
    }); 

const BlogPost = mongoose.model("BlogPost", postSchema); // this will be used for all blog posts without exception.


/*
    Connecting to mongodb and handling the case when the connection fails.
    The address and database name are specfied by the MONGODB amd DBUSE flags in .env respectively
*/
mongoose.connect(process.env.MONGODB + "/" + process.env.DBUSE)
    .then(() => console.log(`Connected to database ${process.env.DBUSE} @ ${process.env.MONGODB}`))
    .catch(err => {console.error(`Couldn't connect to ${process.env.MONGODB}`, err); process.exit()});


const client = express(); // every client side route is defined here

/********* ALL CLIENT ROUTES *********/

client.use(express.json());

// loads a bunch of routes defined in ./routes/main.json
Object.keys(routes).forEach(key => {
    client.get(key, (req, res) => {
        res.sendFile(path.resolve(__dirname, "routes", routes[key]));
    });
});

// any request that is not defined should go here
client.get((req, res, next) => {
    console.log("bad request");
    res.status(404).send("error");
})

client.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "app", "dist", "index.html"));
});

client.get("/bundle.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "app", "dist", "bundle.js"));
});


client.listen(process.env.CLIENTPORT, ()=>{
    console.log(`Listening on port ${process.env.CLIENTPORT}`);
});


const admin = express(); // every admin related route is defined here
admin.use(express.json());

/***********  ALL ADMIN ROUTES ************/
/* These routes are accessed on a seperate port to the client application and are only accessible by trusted devices */

admin.post("/db/blogpost", (req, res) => {
    new BlogPost({
        title : req.body.title,
        content : req.body.content,
        visible: false,
        tags : req.body.tags | [],
        date : req.body.date || Date.now()
     }).save().then(res.send(req.body));
});


admin.listen(process.env.ADMINPORT, ()=>{
    console.log(`Listening for admin on port ${process.env.ADMINPORT}`);
});