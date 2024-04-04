import { Link, Outlet, useLocation } from "react-router-dom";
import '../css/Navigation.css'
import logo from "../assets/images/logo.png"

const Navigation = () => {

    const location = useLocation();
    const splitLocation = location.pathname.split("/");
    console.log(splitLocation);

    const homePath = () => {
        if(splitLocation.length === 2){
            return "/cinema";
        }
    };

    const moviesPath = () => {
        if(splitLocation.length === 2){
            return "/movies";
        }
    };

    const loginPath = () => {
        if(splitLocation.length === 2){
            return "/login";
        }
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
                    <li><Link to={loginPath()}>Login 👤</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}
 
export default Navigation;