import MovieList from "./MovieList";

const Cinema = ({movies, highestRatedMovies, movieLists}) => {
    
    const userReviewedMovies = () => {}

    
    return ( 
        <>
            <div> A FUN GRAPHIC INSERTED HERE</div>
            <main>
                <MovieList 
                    listOfMovies={highestRatedMovies}
                />
                {/* <MovieList 
                    listOfMovies={userReviewedMovies}
                /> */}
            </main>
        </>
     );
}
 
export default Cinema;