// This is the main server file

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const routes = require("./routes/main.json");

require('dotenv').config();

// This is the only schema type that needs to be stored in the database for now
const postSchema = mongoose.Schema({
        title : String,
        subtitle: String,
        extrajslink: String,
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

client.get("/blog", (req,res) => {
    res.sendFile(path.resolve(__dirname, "app", "dist", "index.html"));
});

client.get("/bundle.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "app", "dist", "bundle.js"));
});



client.get("/db/get/blogpost", (req, res) => {

    const getBlogPosts = async function(){
        return await
            BlogPost.find({}, {_id:1, tags:1, title:1, subtitle:1, extrajslink:1, content:1, date:1, visible:1})
                .sort({date: -1});
    }

    getBlogPosts()
        .then(objList => objList
            .filter(obj => obj.visible))
        .then(objList=>res.send(objList));
})


client.listen(process.env.CLIENTPORT, ()=>{
    console.log(`Listening on port ${process.env.CLIENTPORT}`);
});


const admin = express(); // every admin related route is defined here
admin.use(express.json());

/***********  ALL ADMIN ROUTES ************/
/* These routes are accessed on a seperate port to the client application and are only accessible by trusted devices */



admin.get("/admin/adminPanel.js", (req, res) => {

    res.sendFile(path.resolve(__dirname, "app", "dist", "adminPanel.js"));

});

admin.get("/admin", (req, res) => {

    res.sendFile(path.resolve(__dirname, "app", "dist", "adminIndex.html"));

});

admin.post("/admin/db/post/blogpost", (req, res) => {

    new BlogPost({
        title : req.body.title,
        subtitle: req.body.subtitle || "",
        extrajslink: req.body.extrajslink || "",
        content : req.body.content,
        visible: false,
        tags : req.body.tags | [],
        date : req.body.date || Date.now()
     }).save().then(res.send(req.body));
});

admin.post("/admin/db/post/update-blogpost/:id", (req, res) => {

    console.log(req.params);
    console.log(req.body);

    const updateBlogPost = async function(id, params){
        const blogPost = await BlogPost.findById(id);

        blogPost.title = params.title;
        blogPost.subtitle = params.subtitle;
        blogPost.content = params.content;
        blogPost.visible = params.visible;
        blogPost.date = blogPost.date;

        const result = await blogPost.save();
        return result;
    }

    if(!req.params.id){
        res.send("error, no params specified");
    }

    updateBlogPost(req.params.id, req.body)
    .then(result=>res.send(result));


});

admin.post("/admin/db/post/blogpost-set-visiblility/:id/:value", (req, res) => {

    const updateBlogPostVisibility = async function(id, value){
        const blogPost = await BlogPost.findById(id);
        if(!blogPost) return;
        blogPost.visible = value;
        const result = await blogPost.save();
        return result;
    }

    updateBlogPostVisibility(req.params.id, req.params.value)
        .then(result=>res.send(result));
});

// gets all posts made visible or not.
admin.get("/admin/db/get/blogpost-all", (req, res) => {

    const getBlogPosts = async function(){
        return await
            BlogPost.find({}, {_id:1, tags:1, title:1, subtitle:1, extrajslink:1, content:1, date:1, visible:1})
                .sort({date: -1});
    }

    getBlogPosts()
        .then(objList=>res.send(objList));
})


admin.listen(process.env.ADMINPORT, ()=>{
    console.log(`Listening for admin on port ${process.env.ADMINPORT}`);
});