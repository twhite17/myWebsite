
import React from "react"
import ReactDOM from "react-dom"
import {ComponentView} from "./ComponentView"
import {Card, Button} from "react-bootstrap"
import {BlogPost} from "./BlogPost"

export class Blog extends React.Component{


    constructor(props){
        super(props);
        this.state = {posts:[]};
    }

    render(){
        const postRender =
            this.state.posts.map(
                post => <BlogPost key={post._id} post={post}></BlogPost>
            );
        const rtn =
            <div>
                <br/>
                <br/>
                <br/>
                {postRender}
            </div>;
        return rtn;
    }

    componentDidMount(){

        fetch("/db/get/blogpost")
        .then(posts=>posts.json())
        .then(posts=>this.setState({posts:posts}))

    }


}



