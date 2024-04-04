import { useParams } from "react-router-dom";
import MovieList from "./MovieList";

const MovieListList = ( { movieLists } ) => {

    const {userId} = useParams();

    const loadComponents = () => {
        if(userId === undefined){
            return movieLists.map(movieList => {
                return <li key={movieList.id}><MovieList listOfMovies={movieList.movies} title={movieList.title} userId={userId}/></li>;
            });
        }

        const filteredMovieLists = movieLists.filter(movieList => userId === movieList.user.id);
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