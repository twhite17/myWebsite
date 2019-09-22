
import React from "react"
import ReactDOM from "react-dom"

import {ComponentView} from "./ComponentView"

export class MinecraftServer extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const serverPage = 
            <div>
                <img src="/images/minecraft1.png" className="img-fluid"></img>
            </div>;

        return serverPage;
    }

}