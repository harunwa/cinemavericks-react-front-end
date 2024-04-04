import { Link } from "react-router-dom";
import '../css/User.css' 

const User = ( { user } ) => {
    return (  
        <div className="user">
            <p className="user-name">{user.name}</p>
            <button className="sign-in-button">
            <Link to={`/user/${user.id}/cinema`}>Sign In!</Link>
            </button>
        </div>
    );
}
 
export default User;