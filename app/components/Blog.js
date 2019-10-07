
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
        console.log(this.state);
        if(this.state.posts == []){
            const rtn =
                <div>
                    <br/>
                    <br/>
                    <br/>
                </div>;
            return rtn;
        }else{
            const rtn =
                <div>
                    <br/>
                    <br/>
                    <br/>
                </div>;
            return rtn;
        }
    }

    componentDidMount(){

        fetch("/db/get/blogpost")
        .then(posts=>posts.json())
        .then(posts=>this.setState({posts:posts}))

    }


}



