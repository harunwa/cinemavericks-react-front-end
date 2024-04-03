import { Link } from "react-router-dom";

const User = ( { user } ) => {
    return (  
        <>
            <p>{user.name}</p>
            <button><Link to={`/user/${user.id}/cinema`}>Sign In!</Link></button>
        </>
    );
}
 
export default User;