const MovieList = ({listOfMovies}) => {

    const MovieComponents = listOfMovies.map(movie => {
        return <li> {movie.title} </li>
    }) 


    return (  
        <>
            <ul>{MovieComponents}</ul>
        </>
    );
}
 
export default MovieList;