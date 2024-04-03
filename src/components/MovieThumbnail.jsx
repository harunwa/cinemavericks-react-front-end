import { Link } from "react-router-dom";
import '../css/MovieThumbnail.css'  

const MovieThumbnail = ({movie, userId}) => {
    
    const linkComponent = () => {
        if(userId === undefined){
            return <Link to={`/movies/${movie.id}`}>To Movie...</Link>;
        }
        return <Link to={`/user/${userId}/movies/${movie.id}`}>To Movie...</Link>;
    }

    return (  
        <>
            <div>
                <h4>
                    {movie.title}
                </h4>
                <button>{linkComponent()}</button>
                <p id="popcorn">🍿</p>
            </div>
        </>
    );
}
 
export default MovieThumbnail;