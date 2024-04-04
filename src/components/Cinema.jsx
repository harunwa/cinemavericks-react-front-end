import MovieList from "./MovieList";
import { useParams } from "react-router-dom";
import '../css/Cinema.css'
import landing from "../assets/images/landing-page-graphic.jpg"

const Cinema = ({movies, highestRatedMovies, movieLists}) => {

    const {userId} = useParams();

    const userReviewedMovies = movies.filter(movie => {
        let matchedMovie = null;
        const reviews = movie.reviews;
        reviews.forEach(review => {
            if (parseInt(userId) === review.user.id) {
                matchedMovie = movie;
            }
        })
        return matchedMovie !== null;
    });

    const reviewMoviesComponent = () => {
        if(userId !== undefined){
            return <MovieList 
                        listOfMovies={userReviewedMovies} 
                        title={"Movies I have Reviewed:"} 
                        userId={userId}
                   />;
        }
        return <></>;
    }

    return ( 
        <>
            <div id="graphic"> 
                <img id="landing-pic" src={landing} alt="An axolotl at the cinema with friends"/>
            </div>
            <main>
                <MovieList 
                    listOfMovies={highestRatedMovies} 
                    title={"Highest Rated Movies:"}
                    userId={userId}
                />
                {reviewMoviesComponent()}
            </main>
        </>
     );
}
 
export default Cinema;