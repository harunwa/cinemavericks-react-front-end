const MovieList = ({listOfMovies, title}) => {

    const MovieComponents = listOfMovies.map(movie => {
        return <li> {movie.title} </li>
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