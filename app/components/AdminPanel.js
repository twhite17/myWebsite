
import React from "react"
import ReactDOM from "react-dom"

import {BlogPostEditor} from "./BlogPostEditor"

import "bootstrap/dist/css/bootstrap.css"
import "../style/main.css"

const content = fetch("/admin/db/get/blogpost-all")
  .then(raw=>raw.json())
  .then(content=>content
      .map(obj=><BlogPostEditor key={obj._id} post={obj}></BlogPostEditor>)
    )
  .then(obj=>{
    ReactDOM.render(
      <div>{obj}</div>,
      document.getElementById("root")
  );  
  })

