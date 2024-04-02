import { Link } from "react-router-dom";

const MovieThumbnail = ({movie}) => {
    return (  
        <>
            <div>
                <button> <Link to={`/movies/${movie.id}`}>See Movie</Link></button>
            </div>
        </>
    );
}
 
export default MovieThumbnail;