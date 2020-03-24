import React from 'react';
import who from "../images/who.png";
import '../styles/Header.scss';
import stayHome from "../images/stayHome.png";
import needHelp from "../images/needHelp.png";
const Header = () =>{
    return(
        <div className="u-spacer--x-large-bottom">
            <div className="u-flex u-flex--spaceBetween u-spacer--thin-right head-nav u-spacer--large-bottom">
                <img className="u-header-who u-spacer--large-bottom" src={who} alt="" />
                <img className="u-header-stayHome u-spacer--large-bottom" src={stayHome} alt="" />
            </div> 
            <div className="u-flex u-flex--center">
                <p className="f-cvoid-left">FIGHT </p>
                <p className="u-spacer--x-thin-left f-cvoid-right">CVOID-19 !</p>
            </div>
            <img height="130px" width="70%" src={needHelp} alt="" />
        </div>
    )
}
export default Header;