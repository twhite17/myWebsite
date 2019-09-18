
import React from "react"
import ReactDOM from "react-dom"

import {Navbar, Nav, NavDropdown, FormControl, Form, Button, Header} from "react-bootstrap"

export class DocHeader extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const component =
            <Navbar className="navbar navbar-expand-sm bg-dark justify-content-center" variant="dark">
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-center" >
                    <Navbar.Brand>Tim White</Navbar.Brand>
                    <Nav className="ml-2">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Projects</Nav.Link>
                        <Nav.Link>Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>;
    return component
    }

}

