
import React from "react"
import ReactDOM from "react-dom"
import {ComponentView} from "./ComponentView"
import { log } from "util";

export class Blog extends React.Component{


    constructor(props){
        super(props);
        this.state = {posts:[]};
    }

    render(){
        const postRender =
            this.state.posts.map(
                post => {
                    const rtn = <ComponentView key={post._id} centre={
                        <div>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                        </div>
                    }></ComponentView>
                    return rtn;
                }
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



