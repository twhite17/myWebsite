
import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom"


import {ComponentView} from "./ComponentView"
import {Fetcher} from "./Fetcher"


import {Navbar, Nav, NavDropdown, FormControl, Form, Button, Header} from "react-bootstrap"
import { HeaderAnimation } from "./HeaderAnimation"

export class DocHeader extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const navBar = <Navbar className="navbar navbar-expand-sm bg-dark justify-content-center fixed-top" variant="dark">
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-center" >
                        <Navbar.Brand>Tim's Tech</Navbar.Brand>
                        <Nav className="ml-2">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/projects">Projects</NavLink>
                            <Nav.Link>Tutorials</Nav.Link>
                            <Nav.Link>Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>;
        
        const home = () => <ComponentView centre={<h1>hello there!</h1>}></ComponentView>;
        const projects = () => <div></div>;

        const component =
            <Router>
                {navBar}
                <HeaderAnimation></HeaderAnimation>

                <Route exact path="/" component={home}/>
                <Route path="/projects" component={projects}/>

            </Router>;
        
    
    return component;
    }

}

