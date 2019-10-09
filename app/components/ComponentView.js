
import React from "react"
import ReactDOM from "react-dom"

export class ComponentView extends React.Component{

    constructor(props){
        super(props);
        this.state = {mobile: window.innerWidth <= 760};
        this.bg = props.bg ? props.bg : "white";

        this.left = props.left ? props.right : <div></div>;
        this.right = props.right ? props.right : <div></div>;
        this.centre = props.centre ? props.centre : <div></div>;
    }


    render(){
        const rtn =
            !this.state.mobile ?
                <div className="container" style={{backgroundColor:this.bg}}>
                    <br/>
                    <div className="row">
                        <div className="col-sm" style={{backgroundColor:this.bg}}>{this.left}</div>
                        <div className="col-md-auto">{this.centre}</div>
                        <div className="col-sm" style={{backgroundColor:this.bg}}>{this.right}</div>
                    </div>
                </div>
              :
              <div className="container" style={{backgroundColor:this.bg}}>
                    <br/>
                    <div className="row">
                        <div className="col-md-auto">{this.centre}</div>
                    </div>
                </div>
            ;

        
        return rtn;
        
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    
    resize() {
        this.setState({mobile: window.innerWidth <= 760});
    }

}



