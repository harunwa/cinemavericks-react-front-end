import { Link } from "react-router-dom";

const MovieThumbnail = ({movie, userId}) => {
    
    const linkComponent = () => {
        if(userId === undefined){
            return <Link to={`/movies/${movie.id}`}>See Movie</Link>;
        }
        return <Link to={`/user/${userId}/movies/${movie.id}`}>See Movie</Link>;
    }

    return (  
        <>
            <div>
                <h3>
                    {movie.title}

                </h3>
                <button>{linkComponent()}</button>
            </div>
        </>
    );
}
 
export default MovieThumbnail;