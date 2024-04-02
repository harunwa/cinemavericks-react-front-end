import MovieThumbnail from "./MovieThumbnail";


const MovieList = ({listOfMovies, title}) => {

    const MovieComponents = listOfMovies.map(movie => {
        return <>
            <li>{movie.title}</li> 
            <MovieThumbnail movie={movie}/>
        </>
    }) 


    return (  
        <>
            <section>
                <h3>{title}</h3>
                <ul>{MovieComponents}</ul>
            </section>
        </>
    );
}
 
export default MovieList;