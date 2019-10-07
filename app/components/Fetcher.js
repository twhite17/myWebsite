
import React from "react"
import ReactDOM from "react-dom"
import { parse } from "querystring";

export class Fetcher extends React.Component{

    constructor(props){
        super(props);
        this.transform = props.transform;
        this.req = props.req;
        this.state = {text:null};
    }

    // I'm not really a fan of this but I need to render some html pages that are sent from a server
    // This is how I'm doing it for now but I'll hopefully learn of a better way in the future
    render(){
        return React.createElement("div", {
            dangerouslySetInnerHTML:{__html: this.transform(this.state)}
        })
    }

    componentDidMount(){
        fetch(this.req)
            .then(data => {
                this.setState(data);
            })
            .catch(console.log);
    }

}