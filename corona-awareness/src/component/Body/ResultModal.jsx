import React, { Component } from 'react';
import onlineDoc from "../../images/onlineDoc.webp";
class ResultModal extends Component{
    render(){
        return(
           <div className="u-xx-large-margin">
                <div className = "u-result-card u-text-center u-cushion--more-top u-cushion--more-bottom">
                     <p className="u-user u-spacer--x-thin-bottom">Dear User,</p>
                     <p className="u-message u-spacer--thin-left u-spacer--thin-right u-spacer--more-bottom">{this.props.message}</p>   
                     <p className="u-suggestion u-spacer--thin-left u-spacer--thin-right">{this.props.suggestion}</p>   
                </div>
                <div>

                        <div className="u-flex u-flex--center">
                            <p className="u-marketing-text u-spacer--x-large-top">Consult Doctors Online.</p>
                            <img className="u-spacer--thin-left u-spacer--x-large-top" height='25px' width='25px' src={onlineDoc} alt='' />
                        </div>

                        <p className="u-promotion-practo u-spacer--more-top u-spacer--more-bottom">Visit practo</p>
                        <a href="https://www.practo.com/coronavirus">
                            <img height="40px" width="40px" src="data:image/png;base64,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" alt='' />
                        </a>
                </div>  
           </div>
        )
    }
}
export default ResultModal;