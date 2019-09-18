// This is the main server file

const express = require("express");

const path = require("path");

require('dotenv').config();



const app = express();
const port = process.env.DEVPORT;

app.use(express.json());

app.get((req, res, next) => {
    console.log("bad request");
    res.status(404).send("error");
})

app.get("/api/test", (req, res) => {
    console.log(req.path)
    res.send({text:"Hello World!"});
});

app.get("/", (req,res) => {
    console.log(req.path);
    res.sendFile(path.resolve(__dirname, "app", "dist", "index.html"));
});

app.get("/bundle.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "app", "dist", "bundle.js"));
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});
