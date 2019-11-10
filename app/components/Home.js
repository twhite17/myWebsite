
import React from "react"
import ReactDOM from "react-dom"

import {Card, Button} from "react-bootstrap"

import {ComponentView} from "./ComponentView"
import {HeaderAnimation} from "./HeaderAnimation"
import {Fetcher} from "./Fetcher"

/*
    About : This is the component that is displayed when the client is at the HomePage
    This is mostly just HTML
*/
export class Home extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const home = 
            <div>
            <HeaderAnimation></HeaderAnimation>
            <br/>
            <br/>
            <br/>
            <br/>
                <ComponentView centre={
                    <div>
                        <h2>
                            Introduction
                        </h2>
                        <br/>
                        <p>
                            My name is Tim, I am a Computer Science Student at Monash University and an aspiring Software Developer. 
                        </p>
                    </div>
                }/>
                <br/>
                <ComponentView centre={
                    <div>
                        <h2>
                            About this website
                        </h2>
                        <br/>
                        <p>
                            This website was created originally with the intention of acting as a portfolio. 
                            <br/>
                            However I will also be uploading other things of interest that I want people to know about, employers or otherwise.<br/><br/>
                            If you are here to learn more about me as an IT proffessional this site was designed with you in mind.<br/> However it
                            does have sections that are a little less about work and more about me just doing cool stuff with technology.<br/>

                        </p>
                    </div>
                }/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h2>My Work</h2>
                <br/>
                <div className="row" id="projects">
                    <div className="col-sm"></div>
                    <div className="col-md-auto">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/images/asteroids2.png" />
                            <Card.Body>
                                <h3>Asteroids Game</h3>
                                <Card.Text>
                                    For a University project I re-created asteroids using TypeScript with a Functional Approach.
                                    I was marked on my abilty to use the functional style to implement my solution, this code is far
                                    from perfect (I am new to functional programming) but I learned so much from it and I am proud of it.
                                </Card.Text>
                                <div className="col text-center">
                                    <div className="row">
                                    <Button variant="primary" href="https://github.com/twhite17/asteroids" target="_blank">View Project</Button>
                                    <Button variant="secondary" href="/asteroids/asteroids.html">Live Demo</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                <div className="col-md-auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/images/marie2.png" />
                        <Card.Body>
                            <h3>MARIE.py</h3>
                            <Card.Text>
                                This is the oldest project listed here. In my first year I had to write assembly for a new hardware architecture
                                called <a href="https://github.com/MARIE-js/MARIE.js" target="_blank">MARIE.js</a> I wanted to learn more about what writing an emulator would entail so I decided 
                                to try and implement my own version in Python 3. 
                            </Card.Text>
                            <div className="col text-center">
                                <Button variant="primary" href="https://github.com/twhite17/MARIE.py" target="_blank">View Project</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/images/website2.png" />
                        <Card.Body>
                            <h3>This Website</h3>
                            <Card.Text>
                                This website was build using React and Express with Bootstrap and was quite a fun albeit simple project. Atleast until I started working on the blog. 
                            </Card.Text>
                            <div className="col text-center">
                                <Button variant="primary" href="https://github.com/twhite17/myWebsite" target="_blank">View Project</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-sm"></div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            </div>;
        
        return home;
    }

}
