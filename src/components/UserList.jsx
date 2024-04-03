import User from "./User";

const UserList = ( { users } ) => {

    const userListComponents = users.map((user) => {
        return <li key={user.id}><User user={user} /></li>
    });

    return (  
        <ul>
            {userListComponents}
        </ul>
    );
}
 
export default UserList;