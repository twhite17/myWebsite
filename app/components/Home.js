
import React from "react"
import ReactDOM from "react-dom"

import {Card, Button} from "react-bootstrap"

import {ComponentView} from "./ComponentView"
import {HeaderAnimation} from "./HeaderAnimation"
import {Fetcher} from "./Fetcher"

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
                            My name is Tim and I am a Computer Science Student at Monash University. As well as an aspiring Software Developer. 
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
                            does have sections that are a little less about work and more about me just doing cool stuff with technology<br/>
                            (such as my minecraft server with a custom modpack).

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
                <div className="row">
                    <div className="col-sm"></div>
                    <div className="col-md-auto">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <h3>Asteroids Game</h3>
                                <Card.Text>
                                    For a University project I re-created asteroids using TypeScript with a Functional Approach.
                                    I was marked on my abilty to use the functional style to implement my solution, this code is far
                                    from perfect (I am new to functional programming) but I learned so much from it and I am proud of it.
                                </Card.Text>
                                <Button variant="primary">View Project</Button>
                                <Button variant="secondary" href="https://github.com/twhite17/myWebsite">Live Demo</Button>
                            </Card.Body>
                        </Card>
                    </div>

                <div className="col-md-auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <h3>MARIE.py</h3>
                            <Card.Text>
                                This is the oldest project listed here. In my first year I had to write assembly for a new hardware architecture
                                called <a href="https://github.com/MARIE-js/MARIE.js">MARIE.js</a> I wanted to learn more about what writing an emulator would entail so I decided 
                                to try and implement my own version in Python 3. 
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/twhite17/MARIE.py">View Project</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <h3>This Website</h3>
                            <Card.Text>
                                This website was build using React and Express with Bootstrap and was quite a fun albeit simple project. 
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/twhite17/myWebsite">View Project</Button>
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