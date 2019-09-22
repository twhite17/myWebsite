/*
    This is the main web app file.
    All components will be combined into the final page in this document
*/





/*        Constant Declarations        */


/***************************************/


import React from "react"
import ReactDOM from "react-dom"

import "bootstrap/dist/css/bootstrap.css"
import "./style/main.css"

import {Main} from "./components/Main"

const wrapper = 
  <div>
    <Main></Main>
  </div>;


ReactDOM.render(
    wrapper,
    document.getElementById("root")
);