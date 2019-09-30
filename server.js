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
        tags : {type : Array, default: []}
    }); 

const BlogPost = mongoose.model("BlogPost", postSchema);


/*
    Connecting to mongodb and handling the case when the connection fails.
    The address and database name are specfied by the MONGODB amd DBUSE flags in .env respectively
*/
mongoose.connect(process.env.MONGODB + "/" + process.env.DBUSE)
    .then(() => console.log(`Connected to database ${process.env.DBUSE} @ ${process.env.MONGODB}`))
    .catch(err => console.error(`Couldn't connect to ${process.env.MONGODB}`, err));


const app = express();
const port = process.env.DEVPORT; // the port that this server will run on

app.use(express.json());

Object.keys(routes).forEach(key => {
    app.get(key, (req, res) => {
        res.sendFile(path.resolve(__dirname, "routes", routes[key]));
    });
});

app.get((req, res, next) => {
    console.log("bad request");
    res.status(404).send("error");
})

app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "app", "dist", "index.html"));
});

app.get("/bundle.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "app", "dist", "bundle.js"));
});

const blogPost = new BlogPost({
    title: "First Post Test",
    content: "This is just a test, hopefully no-one actually sees this.",
    visible: true
})

const test1 = async () => {
    return await blogPost.save();
}

test1().then(console.log);

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});
