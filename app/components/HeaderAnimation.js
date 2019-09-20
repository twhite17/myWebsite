
import React from "react"

export class HeaderAnimation extends React.Component{

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

      render(){
        const win = 
            <svg width={this.state.width} height={320}>
                <text textAnchor="middle" fill="white" fontSize={32} x={this.state.width/2} y={160}>Software Developer</text>            
            </svg>;
        
        return win;
      }
}

