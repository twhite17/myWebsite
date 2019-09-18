
import React from "react"
import ReactDOM from "react-dom"

export class ComponentView extends React.Component{

    constructor(props){
        super(props);
        this.left = props.left;
        this.right = props.right;
        this.centre = props.centre;
    }


    render(){
        const rtn =
            <div className="container">
                <br/>
                <div className="row">
                    <div className="col-1">{this.left}</div>
                    <div className="col-md-auto">{this.centre}</div>
                    <div className="col-1">{this.right}</div>
                </div>
            </div>;

        
        return rtn;
        
    }

}



