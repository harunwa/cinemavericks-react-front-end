import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating'; 

const Review = ( { review, userId, deleteReview, editReview } ) => {

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
    
    const handleClick = () => {
        deleteReview(review.id);
    }

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
            {
                parseInt(userId) === review.user.id ? 
                <button onClick={handleClick}>Delete Your Review</button> :
                <></>
            }
        </>
    );
}
 
export default Review;