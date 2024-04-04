import { Link, Outlet, useLocation } from "react-router-dom";
import '../css/Navigation.css'
import logo from "../assets/images/logo.png"

const Navigation = () => {

    const location = useLocation();
    const splitLocation = location.pathname.split("/");

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

    const movieListsPath = () => {
        if(splitLocation.length === 2){
            return "/public_movielists";
        }
        return `/user/${splitLocation[2]}/movielists`
    };

    const publicMovieListsPath = () => {
        if(splitLocation.length === 2){
            return "/public_movielists";
        }
        return `/user/${splitLocation[2]}/public_movielists`
    }

    return (  
        <>
            <nav>
                <div id="AppDiv">
                    <Link to={homePath()}>
                        <img id="logo" src={logo} alt="Cinemavericks logo and tag line"/>
                     </Link>
                </div>
                <ul id="nav__container">
                    <li><Link to={homePath()}>Home 🏠</Link></li>
                    <li><Link to={moviesPath()}>Movies 🎥</Link></li>
                    <li><Link to={movieListsPath()}>My Movie Lists 📋</Link></li>
                    <li><Link to={publicMovieListsPath()}>All Movie Lists 🌍</Link></li>
                    <li><Link to="/login">Login 👤</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}
 
export default Navigation;