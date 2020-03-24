import React, { Component } from "react";
import '../../styles/Details.scss';
import profileImg from '../../images/profileImg.jpg';
import continueImg from '../../images/continue.png';


class Details extends Component{
    render(){
        return(
           <div className="c-details-card">
                <div className="u-flex u-flex--center">

                    <img className='profile-img' src={profileImg} alt='' />
                    <div className="user-details u-spacer--thin-left">
                        
                        <div className="u-flex c-details-gender">
                                <p>Gender : </p> 
                            <label>Male</label>
                                    <input className="user-gender-input" type="radio" name="gender" value="M" />
                            <label>Female</label>
                                    <input className="user-gender-input" type="radio" name="gender" value="F" />
                        </div> 

                        <div className="u-flex c-details-age">
                                <p>Age :</p> 
                                <input className="user-age-input" id="user-age" type="tel" maxLength='2' autoComplete="off"/>
                        </div>
                    </div>
                </div>
                <img height="40px" width="37%" src={continueImg} alt="" />
           </div>
        )
    }    
}
export default Details;