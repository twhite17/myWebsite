/*
    This is the main web app file.
    All components will be combined into the final page in this document
*/





/*        Constant Declarations        */
const domain = `localhost:8000/`;


/***************************************/


import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.css"
import "./style/main.css"

import {DocHeader} from "./components/DocHeader"
import {ComponentView} from "./components/ComponentView"
import {Fetcher} from "./components/Fetcher"
import {HeaderAnimation} from "./components/HeaderAnimation"

const header = 
  <div>
    <DocHeader></DocHeader>
    <HeaderAnimation></HeaderAnimation>
  </div>;

const homePage =
  <div>
  <ComponentView centre={<Fetcher req="/content/home"></Fetcher>}></ComponentView>
  </div>;


ReactDOM.render(
    <div>
      {header}
      <div id="content">
        {homePage}
      </div>
    </div>,
    document.getElementById("root")
);