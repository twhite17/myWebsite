
import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom"


import {ComponentView} from "./ComponentView"
import {Fetcher} from "./Fetcher"
import {Home} from "./Home"
import {Blog} from "./Blog"
import {MinecraftServer} from "./MinecraftServer"


import {Navbar, Nav, NavDropdown, FormControl, Form, Button, Header} from "react-bootstrap"
import { HeaderAnimation } from "./HeaderAnimation"

export class Main extends React.Component{
    constructor(props){
        super(props);
        this.home = this.home.bind(this);
        this.blogPage = this.blogPage.bind(this);
    }

    home(){
        const homePage = <Home></Home>;
        return homePage;
    }

    blogPage(){
        const blogPage = <Blog></Blog>;
        return blogPage;
    }

    minecraftServer(){
        const minecraftServerPage = <MinecraftServer></MinecraftServer>;
        return minecraftServerPage;
    }

    render(){
        const navBar = <Navbar className="navbar bg-dark justify-content-center fixed-top" expand="lg" variant="dark">
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <div className="row">
                        <Navbar.Brand>Tim's Website</Navbar.Brand>
                        <Navbar.Collapse>
                            <Nav className="ml-2">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                                {/* <NavLink className="nav-link" to="/tutorials">Tutorials</NavLink> */}
                                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                                {/*<NavLink className="nav-link" to="/server">Server</NavLink>*/}
                            </Nav>
                        </Navbar.Collapse>
                    </div>
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
                <Route path="/blog" component={this.blogPage}/>

            </Router>;
        
    
    return component;
    }

}

