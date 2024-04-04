import { Link, Outlet, useLocation } from "react-router-dom";
import '../css/Navigation.css'
import logo from "../assets/images/logo.png"
import { useState } from "react";

const Navigation = () => {

    const location = useLocation();
    const splitLocation = location.pathname.split("/");
    console.log(splitLocation);

    const homePath = () => {
        if(splitLocation.length === 2){
            return "/cinema";
        }
        return `/user/${splitLocation[2]}/cinema`;
    };

    const moviesPath = () => {
        if(splitLocation.length === 2){
            return "/movies";
        }
        return `/user/${splitLocation[2]}/movies`;
    };

    return (  
        <>
            <nav>
                <div id="AppDiv">
                    <img id="logo" src={logo} alt="Cinemavericks logo and tag line"/>
                </div>
                <ul id="nav__container">
                    <li><Link to={homePath()}>Home 🏠</Link></li>
                    <li><Link to={moviesPath()}>Movies 🎥</Link></li>
                    <li><Link to="/login">Login 👤</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}
 
export default Navigation;