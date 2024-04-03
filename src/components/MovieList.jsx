import MovieThumbnail from "./MovieThumbnail";
import '../css/MovieList.css'   


const MovieList = ({listOfMovies, title}) => {

    const MovieComponents = listOfMovies.map(movie => {
        return <>
            <MovieThumbnail movie={movie}/>
        </>
    });

    return (  
        <>
            <section id="thumbnail__container">
                <h3>{title}</h3>
                <ul id="MovieList">{MovieComponents}</ul>
            </section>
        </>
    );
}
 
export default MovieList;