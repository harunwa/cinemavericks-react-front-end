import { Link } from "react-router-dom";
import '../css/MovieThumbnail.css'  

const MovieThumbnail = ({movie}) => {
    return (  
        <>
            <div>
                <h4>
                    {movie.title}
                </h4>
                <button> <Link to={`/movies/${movie.id}`}>To Movie...</Link></button>
                <p id="popcorn">🍿</p>
            </div>
        </>
    );
}
 
export default MovieThumbnail;