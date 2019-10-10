
import React from "react"
import ReactDOM from "react-dom"

import {BlogPostEditor} from "./BlogPostEditor"
import {Button} from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.css"
import "../style/main.css"

class NewPostButton extends React.Component{

  constructor(props){
    super(props);
    this.createPost = this.createPost.bind(this);
  }

  render(){
    return <Button onClick={this.createPost}>New Post</Button>;
  }

  createPost(event){
    fetch("/admin/db/post/blogpost",{
      method: "post",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        title: "New Post",
        content: "This is a new Post"
      })
  });
  }
}

const content = fetch("/admin/db/get/blogpost-all")
  .then(raw=>raw.json())
  .then(content=>content
      .map(obj=><BlogPostEditor key={obj._id} post={obj}></BlogPostEditor>)
    )
  .then(obj=>{
    ReactDOM.render(
      <div>
      <div>{obj}</div>
      <NewPostButton></NewPostButton>
      </div>,
      document.getElementById("root")
  );  
  })

