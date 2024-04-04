import Review from "./Review";

const ReviewList = ( { reviews } ) => {

    const reviewListComponents = reviews.map(review => {
        return <li id="ListItem"><Review key={review.id} review={review}/></li>;
    })

    return (  
        <ul>
            {reviewListComponents}
        </ul>
    );
}
 
export default ReviewList;