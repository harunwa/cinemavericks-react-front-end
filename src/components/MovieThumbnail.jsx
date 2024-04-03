import { Link } from "react-router-dom";

const MovieThumbnail = ({movie}) => {
    return (  
        <>
            <div>
                <h4>
                    {movie.title}
                </h4>
                <button> <Link to={`/movies/${movie.id}`}>See Movie</Link></button>
            </div>
        </>
    );
}
 
export default MovieThumbnail;