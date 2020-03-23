import React, { Component } from 'react';
import "../styles/utilities.scss";
import Question from './Question';


class Card extends Component{
    render(){
       
        const {question, imgUrl, classname} = this.props;
        return(
            <div className="u-block-center u-text-center">

                <div className={classname}>
                    <div className="u-flex u-flex--flexStart u-cushion--more-top">
                        <img className="u-img u-spacer--thin-left u-spacer--more-right" height="70px" width="70px" src={imgUrl} alt="" />
                        <Question question={question} />
                    </div>

                    <div className='u-flex u-flex--spaceEvenly u-spacer--large-top u-cushion--left u-cushion--right'>
                        <button className="u-btn u-bg-light-blue" >Rare</button>
                        <button className="u-btn u-bg-wheat">Sometimes</button>
                        <button className="u-btn u-bg-red">Often</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;