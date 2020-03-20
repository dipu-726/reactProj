import React, { Component } from "react";
class AddName extends Component{

    handleClick = ()=>{
       const textFromUser = document.getElementById("addname");
       console.log("button is called !",textFromUser.value);
    }

    render(){
        return(
            <div>
                 <input id="addname" type="text" placeholder="Enter the name" /> 
                 <button onClick={this.handleClick}>Change name </button>
            </div>
        )
    }
}
export default AddName;