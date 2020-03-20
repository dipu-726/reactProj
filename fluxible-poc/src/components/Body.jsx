import React, { Component } from "react";
class Body extends Component{
    render()
    {
        return(
            <div className="application-body" >
                <input type="text" placeholder="Enter the name " /> 
                <button>Change name </button>
                 <p>All Names : </p>
                 <p>Current Name : </p>

            </div>
        )
    }    
}
export default Body;