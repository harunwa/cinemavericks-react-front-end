import {useLoaderData} from "react-router-dom";

const Movie = () => {

    const movie = useLoaderData();

    const strippedMoveTitle = movie.title.replaceAll(' ', '');
    
    return ( 

        <>
        
        </>

     );
}
 
export default Movie;