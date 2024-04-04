import { useLocation, useParams } from "react-router-dom";
import MovieList from "./MovieList";
import landing from "../assets/images/landing-page-graphic.jpg"
import '../css/MovieListList.css'  

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
        <>
        <h2>{userId === undefined || location.pathname.includes("public") ?
             "All Movie Lists" :
              "My Movie Lists"}
            </h2>
            <div id="graphic2">
                <img id="landing-pic" src={landing} alt="An axolotl at the cinema with friends"/>
            </div>
            <ul>
                {loadComponents()}
            </ul>
        </>
    );
}
 
export default MovieListList;