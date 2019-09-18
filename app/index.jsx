/*
    This is the main web app file.
    All components will be combined into the final page in this document
*/





/*        Constant Declarations        */
const domain = `localhost:8000/`;


/***************************************/


import React from "react"
import ReactDOM from "react-dom"

import "bootstrap/dist/css/bootstrap.css"
import "./style/main.css"

import {DocHeader} from "./components/DocHeader"
import {ComponentView} from "./components/ComponentView"
import {Fetcher} from "./components/Fetcher"
import {HeaderAnimation} from "./components/HeaderAnimation"


const txt = <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut velit lectus. Sed aliquam ligula augue. Aenean ac euismod leo. Cras mauris tortor, placerat eget tortor vel, accumsan pellentesque metus. Maecenas a purus vitae nulla venenatis porta. Cras eget sem tempor, interdum elit vitae, interdum odio. Donec ac felis libero. Fusce dapibus, nisl a aliquam mattis, velit eros hendrerit magna, id posuere quam massa non velit. Nunc non eros sed velit aliquet interdum vel in justo. Nunc urna ante, pellentesque eget orci ut, mollis elementum massa. Curabitur et scelerisque purus, nec ullamcorper elit. Mauris non velit eu mauris euismod interdum eu id purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus quis mollis eros. Ut a mattis dolor. </p>;


ReactDOM.render(
    <div>
      <DocHeader></DocHeader>
      <HeaderAnimation></HeaderAnimation>
      <ComponentView centre={txt}></ComponentView>
      <ComponentView centre={txt}></ComponentView>
      <ComponentView centre={txt}></ComponentView>
      <ComponentView centre={txt}></ComponentView>
      <ComponentView centre={txt}></ComponentView>
      <ComponentView centre={<Fetcher transform={(text)=>(<p>{text}</p>)} req="/api/test"></Fetcher>}></ComponentView>
    </div>,
    document.getElementById("root")
);