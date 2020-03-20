import React, { Component } from "react";
class NavBar extends Component
{
    render()
    {
        const imgSrc= "https://cdn.clipart.email/61bd974559a9ceeabc25f9ea131b3347_best-movie-night-clip-art-8497-clipartioncom_1458-746.png";
        return(
            <div className="nav-bar">
               <img className="logo-nav-bar" src={imgSrc} alt="Loading....."/>
               <div>
                    <input className="search-box" type="text" placeholder="Search for Movies."/>
                    <button className="search-button" >Search</button>
               </div>
            </div>
        )
    }
}
export default NavBar;