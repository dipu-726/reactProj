import React, { Component } from "react";
class OptionButton extends Component{

    handleClick = () =>{
        this.props.symtomSelectedByUser(this.props.index,this.props.btnId);
        this.props.identifyButtonPressed(this.props.btnId);
    }
    render(){
        const {classname, btnText} = this.props;
        return(
            <button className={classname} onClick={this.handleClick}> {btnText}</button>
        )
    }
}
export default OptionButton;