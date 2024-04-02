import MovieList from "./MovieList";
const Movies = ({movies}) => {
    return ( 
        <>
            <MovieList listOfMovies = {movies} />
        </>
     );
}
 
export default Movies;