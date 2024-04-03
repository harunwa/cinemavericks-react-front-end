const Review = ( { review } ) => {
    return (  
        <>
            <p>Review by <strong>{review.user.name}</strong></p>
            <p>{review.content}</p>
            <p>Rating: <strong>{review.rating}</strong></p>
        </>
    );
}
 
export default Review;