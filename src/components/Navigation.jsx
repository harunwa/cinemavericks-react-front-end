import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
    return (  
        <>
            <nav>
                <ul>
                    <li> Home </li>
                    <li> Movies</li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}
 
export default Navigation;