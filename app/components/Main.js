
import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom"


import {ComponentView} from "./ComponentView"
import {Fetcher} from "./Fetcher"
import {Home} from "./Home"
import {MinecraftServer} from "./MinecraftServer"


import {Navbar, Nav, NavDropdown, FormControl, Form, Button, Header} from "react-bootstrap"
import { HeaderAnimation } from "./HeaderAnimation"

export class Main extends React.Component{
    constructor(props){
        super(props);
        this.home = this.home.bind(this);
    }

    home(){
        const homePage = <Home></Home>;
        return homePage;
    }

    minecraftServer(){
        const minecraftServerPage = <MinecraftServer></MinecraftServer>;
        return minecraftServerPage;
    }

    render(){
        const navBar = <Navbar className="navbar navbar-expand-sm bg-dark justify-content-center fixed-top" variant="dark">
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-center" >
                        <Navbar.Brand>Tim's Tech</Navbar.Brand>
                        <Nav className="ml-2">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            {/* <NavLink className="nav-link" to="/tutorials">Tutorials</NavLink> */}
                            <NavLink className="nav-link" to="/blog">Blog</NavLink>
                            {/*<NavLink className="nav-link" to="/server">Server</NavLink>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>;
        
        const projects = () => <div></div>;

        const component =
            <Router>
                {navBar}

                <Route exact path="/" component={this.home}/>
                <Route path="/server" component={this.minecraftServer}/>
                <Route path="/tutorials" component={
                    () =>   <div>
                    <br/>
                    <br/>
                    <br/>
                    <h3>This has not yet been implemented :(</h3>
                </div>
                }/>
                <Route path="/blog" component={
                    () =>   <div>
                                <br/>
                                <br/>
                                <br/>
                                <h3>Coming Soon :)</h3>
                            </div>
                }/>

            </Router>;
        
    
    return component;
    }

}

