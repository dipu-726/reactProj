import React, { Component } from 'react';
import "../styles/utilities.scss";
import OptionButton from './OptionButton';

class OptionSelector extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            buttonClicked : null
        }
    }

    identifyButtonPressed = (btnId) =>{
        this.setState({
           buttonClicked: btnId
        });
    }

    BUTTON_ONCLICK = "u-btn u-btn-clicked";
    

    RARE_NOT_CLICKED = "u-btn u-bg-light-blue";
    SOMETIMES_NOT_CLICKED = "u-btn u-bg-wheat";
    OFTEN_NOT_ONCLICKED = "u-btn u-bg-red";

    render(){
        return(
            <div className='u-flex u-flex--spaceEvenly u-spacer--large-top u-cushion--left u-cushion--right'>
                <OptionButton classname={this.state.buttonClicked===0 ? this.BUTTON_ONCLICK :this.RARE_NOT_CLICKED } 
                    btnText = "Rare" identifyButtonPressed={this.identifyButtonPressed} btnId={0}
                />
                <OptionButton classname={this.state.buttonClicked===1 ? this.BUTTON_ONCLICK :this.SOMETIMES_NOT_CLICKED } 
                    btnText = "Sometimes" identifyButtonPressed={this.identifyButtonPressed} btnId={1}
                />
                <OptionButton classname={this.state.buttonClicked===2 ? this.BUTTON_ONCLICK :this.OFTEN_NOT_ONCLICKED } 
                    btnText = "Often" identifyButtonPressed={this.identifyButtonPressed} btnId={2}
                />
        </div>
        )
    }
}
export default OptionSelector;