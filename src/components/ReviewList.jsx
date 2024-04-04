import Review from "./Review";

const ReviewList = ( { reviews, userId, deleteReview } ) => {

    const reviewListComponents = reviews.map(review => {
        return <li id="ListItem"><Review key={review.id} review={review} userId={userId} deleteReview={deleteReview}/></li>;
    })

    return (  
        <ul>
            {reviewListComponents}
        </ul>
    );
}
 
export default ReviewList;