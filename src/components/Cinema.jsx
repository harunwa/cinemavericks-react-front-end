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
    });

    const reviewMoviesComponent = () => {
        if(userId !== undefined){
            return <MovieList listOfMovies={userReviewedMovies} title={"Movies I have Reviewed:"} />;
        }
        return <></>;
    }

    return ( 
        <>
            <div> A FUN GRAPHIC INSERTED HERE</div>
            <main>
                <MovieList 
                    listOfMovies={highestRatedMovies} title={"Highest Rated Movies:"}
                />
                {reviewMoviesComponent()}
            </main>
        </>
     );
}
 
export default Cinema;