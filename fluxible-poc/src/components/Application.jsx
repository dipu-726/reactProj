import React, { Component } from "react";
import NavBar from "./NavBar";
import Body from "./Body";
import Footer from "./Footer";
import "../App.css";

class Application extends Component{
    
    render()
    {
        return(
            <div className="application">
               <NavBar />
               <Body /> 
               <Footer />
            </div>
        )
    }    
}

export default Application;
