
import React from "react"
import ReactDOM from "react-dom"
import {ComponentView} from "./ComponentView"
import {Card, Button} from "react-bootstrap"

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
                        <Card style={{ width: '64rem' }}>
                        <Card.Header as="h5">{post.title}</Card.Header>
                        <Card.Body>
                            <Card.Title>{post.subtitle ? post.subtitle: false}</Card.Title>
                            <p className="post-text">
                            {post.content}
                            </p>
                            <div className="col text-center">
                                <Button variant="secondary">Read More</Button>
                            </div>
                        </Card.Body>
                    </Card>
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



