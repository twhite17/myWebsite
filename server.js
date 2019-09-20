// This is the main server file

const express = require("express");

const path = require("path");

const routes = require("./routes/main.json");

require('dotenv').config();



const app = express();
const port = process.env.DEVPORT;

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

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});
