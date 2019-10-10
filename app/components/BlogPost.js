import React from "react"
import ReactDOM from "react-dom"
import {ComponentView} from "./ComponentView"
import {Card, Button} from "react-bootstrap"

export class BlogPost extends React.Component{

    constructor(props){
        super(props);
        this.state = {post:props.post, hidden:true, arr:[]};
        this.handleClick = this.handleClick.bind(this);
    }

    render(){
        /*
        <div className="col text-center">
        <Button variant="secondary" onClick={this.handleClick}>Read More</Button>
        </div>
        */
        return <ComponentView centre={
            <Card style={{ width: '64rem' }}>
            <Card.Header as="h5">{this.state.post.title}</Card.Header>
            <Card.Body>
                <Card.Title>{this.state.post.subtitle}</Card.Title>
                {   
                    this.state.post.content.split("<br>").map(((val, index) => {
                        return <p key={index} className="post-text">{val}</p>
                    }))
                }
            </Card.Body>
        </Card>
        }></ComponentView>;
    }

    handleClick(event){

        this.setState({
            hidden: !this.state.hidden
            });
    }


}