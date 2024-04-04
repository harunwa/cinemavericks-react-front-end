import { useLocation, useParams } from "react-router-dom";
import MovieList from "./MovieList";

const MovieListList = ( { movieLists } ) => {

    const {userId} = useParams();
    const location = useLocation();

    const loadComponents = () => {
        if(userId === undefined || location.pathname.includes("public")){
            return movieLists.map(movieList => {
                return <li key={movieList.id}><MovieList listOfMovies={movieList.movies} title={`${movieList.title} by ${movieList.user.name}`} userId={userId}/></li>;
            });
        }

        const filteredMovieLists = movieLists.filter(movieList => parseInt(userId) === movieList.user.id);
        return filteredMovieLists.map(movieList => {
            return <li key={movieList.id}><MovieList listOfMovies={movieList.movies} title={movieList.title} userId={userId}/></li>;
        });
    }

    return (  
            <ul>
                {loadComponents()}
            </ul>
    );
}
 
export default MovieListList;