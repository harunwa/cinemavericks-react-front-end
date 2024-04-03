import { Link } from "react-router-dom";

const MovieThumbnail = ({movie}) => {
    return (  
        <>
            <div>
                <h3>
                    {movie.title}

                </h3>
                <button> <Link to={`/movies/${movie.id}`}>See Movie</Link></button>
            </div>
        </>
    );
}
 
export default MovieThumbnail;