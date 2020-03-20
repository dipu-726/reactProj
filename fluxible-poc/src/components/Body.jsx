import React, { Component } from "react";
import AddName from "./AddName";
class Body extends Component{
    render()
    {
        return(
            <div className="application-body" >
                 <AddName />
                 <p>All Names : </p>
                 <p>Current Name : </p>
            </div>
        )
    }    
}
export default Body;