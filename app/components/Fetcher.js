
import React from "react"
import ReactDOM from "react-dom"

export class Fetcher extends React.Component{

    constructor(props){
        super(props);
        this.transform = props.transform;
        this.req = props.req;
        this.state = {text:null};
    }

    render(){
        return this.transform(this.state.text);
    }

    componentDidMount(){
        fetch(this.req)
            .then(req => req.json())
            .then(data => {
                this.setState({
                    text: data.text
                });
            })
            .catch(console.log);
    }

}