const Review = ( { review } ) => {

    const starRating = (rating) => {
        let stars = '';
        for(let i = 1; i <= rating; i++){
            stars += '⭐️';
        }
        if(Math.ceil(rating) !== rating){
            stars += '1/2';
        }
        return stars;
    };

    const date = review.date.split(' ')[0];

    return (  
        <>
            <h3 id="ReviewTitle">{review.title}</h3>
            <div id="ReviewProperties">
                <p>Review by <strong>{review.user.name}</strong></p>
                <p>{review.content}</p>
                <p>Rating: <strong>{starRating(review.rating)}</strong></p>
                <p>{date}</p>
            </div>
        </>
    );
}
 
export default Review;