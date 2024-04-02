import MovieList from "./MovieList";
import { useParams } from "react-router-dom";

const Cinema = ({movies, highestRatedMovies, movieLists}) => {

    const {userId} = useParams();

    const userReviewedMovies = movies.filter(movie => {
        let matchedMovie = null;
        const reviews = movie.reviews;
        reviews.forEach(review => {
            if (userId == review.user.id) {
                matchedMovie = movie;
            }
        })
        return matchedMovie !== null;
    })

    console.log(userReviewedMovies);


    return ( 
        <>
            <div> A FUN GRAPHIC INSERTED HERE</div>
            <main>
                <MovieList 
                    listOfMovies={highestRatedMovies} title={"Highest Rated Movies:"}
                />
                <MovieList 
                    listOfMovies={userReviewedMovies} title={"Movies I have Reviewed:"}
                />
            </main>
        </>
     );
}
 
export default Cinema;