import User from "./User";
import '../css/User.css' 

const UserList = ( { users } ) => {

    const userListComponents = users.map((user) => {
        return <li key={user.id}><User user={user} /></li>
    });

    return (  
        <ul className="user-list">
            {userListComponents}
        </ul>
    );
}
 
export default UserList;