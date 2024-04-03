import { Link, Outlet } from "react-router-dom";
import '../css/Navigation.css'

const Navigation = () => {
    return (  
        <>
            <div >
                <nav>
                    <ul id="nav__container">
                        <li><Link to="/cinema">Home</Link></li>
                        <li><Link to="/movies">Movies</Link></li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    );
}
 
export default Navigation;