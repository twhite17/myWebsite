
import React from "react"
import ReactDOM from "react-dom"
import {Textarea} from "react-bootstrap"
import { log } from "util";

function clone(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}

export class BlogPostEditor extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            _id: this.props.post._id,
            title: this.props.post.title || "",
            subtitle: this.props.post.subtitle || "",
            content: this.props.post.content || "",
            date: this.props.post.date,
            tags: this.props.post.tags || [],
            visible: this.props.post.visible

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    render(){

        const rtn = 
            <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input name="title" type="text" value={this.state.title} onChange={this.handleChange}/>
                <br/>
                <label>Sub Title</label>
                <input name="subtitle" type="text" value={this.state.subtitle} onChange={this.handleChange}/>
                <br/>
                <label>Content</label>
                <textarea name="content" style={{ width: '64rem' }} defaultValue={this.state.content} onChange={this.handleChange}></textarea>
                <br/>
                <input name="visible" type="checkbox" defaultChecked={this.state.visible} onChange={this.handleCheckbox}/>
                <br/>

                <input type="submit" value="Submit"/>
                

            </form>;
        
        return rtn;

    }

    handleChange(event){
        let newState = clone(this.state);
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    handleSubmit(event){
        
        event.preventDefault();

        console.log(`/admin/db/post/update-blogpost/${this.state._id}`);
        console.log(JSON.stringify(this.state));
        fetch(`/admin/db/post/update-blogpost/${this.state._id}`,{
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(this.state)
        });
    }

    
    handleCheckbox(event){
        let newState = clone(this.state);
        newState[event.target.name] = !newState[event.target.name];
        this.setState(newState);
    }



}

