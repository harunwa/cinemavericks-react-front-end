import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navigation from "../components/Navigation";
import Cinema from "../components/Cinema";
import Movies from "../components/Movies";
import Movie from "../components/Movie";
import '../css/CineMavericksContainer.css'   
import UserList from "../components/UserList";

const CineMavericksContainer = () => {
    
    const [movies, setMovies] = useState([]);
    const [movieLists, setMovieLists] = useState([]);
    const [highestRatedMovies, setHighestRatedMovies] = useState([]);
    const [users, setUsers] = useState([]);
    
    const fetchMovies = async () => {
        const response = await fetch("http://localhost:8080/movies");
        const data = await response.json();
        setMovies(data);
    };

    const fetchMovieLists = async () => {
        const response = await fetch("http://localhost:8080/movielists");
        const data = await response.json();
        setMovieLists(data);
    };

    const fetchHighestRatedMovies = async () => {
        const response = await fetch("http://localhost:8080/movies");
        const data = await response.json();
        const sortedData = data.sort((movie1, movie2) => {
            return movie2.averageRating - movie1.averageRating;
        })
        setHighestRatedMovies(sortedData.slice(0,5));
    };

    const fetchUsers = async () => {
        const response = await fetch("http://localhost:8080/users");
        const data = await response.json();
        setUsers(data);
    }

    const postReview = async (newReview) => {
        const response = await fetch("http://localhost:8080/reviews", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newReview)
        });
        fetchMovies();
    }

    const movieLoader = ({params}) => {
        return movies.find(movie => {
            return movie.id === parseInt(params.id);
        });
    }

    
    const cineMaverickRoutes = createBrowserRouter([
        {
            path: "/",
            element: <Navigation />,
            children: [
                {
                    path: "/login",
                    element: <UserList users={users} />
                },
                {
                    path: "/cinema",
                    element: <Cinema 
                        movies={movies}
                        highestRatedMovies={highestRatedMovies}
                        movieLists={movieLists}
                    />
                },
                {                  
                    path: "/user/:userId/cinema", 
                    element: <Cinema 
                        movies={movies}
                        highestRatedMovies={highestRatedMovies}
                        movieLists={movieLists}
                    />
                },                 
                {
                    path: "/movies",
                    element: <Movies 
                        movies={movies}
                    />
                },
                {
                    path: "/movies/:id",
                    loader: movieLoader,
                    element: <Movie 
                        postReview={postReview}
                    />
                }                
            ]
        }
    ]);


    useEffect(() => {
        fetchMovies();
        fetchMovieLists();
        fetchHighestRatedMovies();
        fetchUsers();
    }, []);

    return (  
        <>
            <section>
                <RouterProvider router={cineMaverickRoutes}/>
           </section>
        </>
    );
}
 
export default CineMavericksContainer;