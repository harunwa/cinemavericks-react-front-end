import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
    return (  
        <>
            <nav>
                <ul>
                    <li><Link to="/cinema">Home</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}
 
export default Navigation;