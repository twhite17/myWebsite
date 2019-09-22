
import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"


import {ComponentView} from "./ComponentView"
import {Fetcher} from "./Fetcher"


import {Navbar, Nav, NavDropdown, FormControl, Form, Button, Header} from "react-bootstrap"

export class DocHeader extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const home = () => <ComponentView centre={<Fetcher req="/content/home"></Fetcher>}></ComponentView>;
        const projects = () => <div></div>;
        const component =
            <Router>
                <Navbar className="navbar navbar-expand-sm bg-dark justify-content-center fixed-top" variant="dark">
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-center" >
                        <Navbar.Brand>Tim's Tech</Navbar.Brand>
                        <Nav className="ml-2">
                            <Nav.Link to="/">Home</Nav.Link>
                            <Nav.Link to="/projects">Projects</Nav.Link>
                            <Nav.Link>Tutorials</Nav.Link>
                            <Nav.Link>Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Route exact path="/" component={home}/>
                <Route path="/projects" component={projects}/>
            </Router>;
    return component
    }

}

