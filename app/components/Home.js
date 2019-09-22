
import React from "react"
import ReactDOM from "react-dom"

import {Card, Button} from "react-bootstrap"

import {ComponentView} from "./ComponentView"
import {Fetcher} from "./Fetcher"

export class Home extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const home = 
            <div>
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
                <br/>
                <br/>
                <h2>My Work</h2>
                <br/>
                <div class="row">
                    <div class="col-sm"></div>
                    <div class="col-md-auto">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Asteroids Game</Card.Title>
                                <Card.Text>
                                    For a University project I re-created asteroids using TypeScript with a Functional Approach.
                                    I was marked on my abilty to use the functional style to implement my solution, this code is far
                                    from perfect but I learned so much from it.
                                </Card.Text>
                                <Button variant="primary">View Project</Button>
                            </Card.Body>
                        </Card>
                    </div>

                <div class="col-md-auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Marie.py</Card.Title>
                            <Card.Text>
                                This is the oldest project listed here. In my first year we had to write assembly for a  
                            </Card.Text>
                            <Button variant="primary">View Project</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div class="col-md-auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div class="col-sm"></div>
                </div>

            </div>;
        
        return home;
    }

}
