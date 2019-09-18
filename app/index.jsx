/*
    This is the main web app file.
    All components will be combined into the final page in this document
*/


import React from "react"
import ReactDOM from "react-dom"
import {DocHeader} from "./components/DocHeader"

import "bootstrap/dist/css/bootstrap.css"




ReactDOM.render(
    <DocHeader></DocHeader>,
    document.getElementById("root")
);