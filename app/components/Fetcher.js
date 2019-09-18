
import React from "react"
import ReactDOM from "react-dom"

export class Fetcher extends React.Component{

    constructor(props){
        super(props);
        this.transform = props.transform;
        this.req = this.req;
    }

    render(){
        return this.transform(this.state.text);
    }

    componentDidMount(){
        fetch(this.req)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    text: data.text
                })
            })
            .catch(console.log);
    }

}