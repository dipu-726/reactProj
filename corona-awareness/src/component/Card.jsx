import React, { Component } from 'react';
import "../styles/utilities.scss";
import Question from './Question';
import OptionSelector from './OptionSelector';


class Card extends Component{
    render(){
       
        const {question, imgUrl, classname, index} = this.props;
        return(
            <div className="u-block-center u-text-center">

                <div className={classname}>
                    <div className="u-flex u-flex--flexStart u-cushion--more-top">
                        <img className="u-img u-spacer--thin-left u-spacer--more-right" height="70px" width="70px" src={imgUrl} alt="" />
                        <Question question={question} />
                    </div>
                   <OptionSelector 
                        index={index} 
                        symtomSelectedByUser={this.props.symtomSelectedByUser}
                   />
                </div>
            </div>
        )
    }
}
export default Card;