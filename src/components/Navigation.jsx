import { Link, Outlet } from "react-router-dom";
import '../css/Navigation.css'
import logo from "../assets/images/logo.png"

const Navigation = () => {
    return (  
        <>
            <nav>
                <div id="AppDiv">
                    <img id="logo" src={logo} alt="Cinemavericks logo and tag line"/>
                </div>
                <ul id="nav__container">
                    <li><Link to="/cinema">Home 🏠</Link></li>
                    <li><Link to="/movies">Movies 🎥</Link></li>
                    <li><Link to="/login">Login 👤</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}
 
export default Navigation;