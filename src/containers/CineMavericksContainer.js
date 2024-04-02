import { useEffect, useState } from "react";

const CineMavericksContainer = () => {
    
    const [movies, setMovies] = useState([]);
    const [movieLists, setMovieLists] = useState([]);
    const [highestRatedMovies, setHighestRatedMovies] = useState([]);
    
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
    

    useEffect(() => {
        fetchMovies();
        fetchMovieLists();
        fetchHighestRatedMovies();
    }, []);

    return (  
        <>

        </>
    );
}
 
export default CineMavericksContainer;