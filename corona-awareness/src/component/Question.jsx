import React from 'react';
import "../styles/utilities.scss";

const Question = props =>{
    const {question} = props;
    return(
        <p className="u-question u-spacer--more-top u-spacer--thin-right" >Do you have {question} ?</p>
    )
}
export default Question;