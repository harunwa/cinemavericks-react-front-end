import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating'; 
import { useState } from 'react';

const Review = ( { review, userId, deleteReview, editReview } ) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [stateReview, setStateReview] = useState(
        {
            "title": review.title,
            "content": review.content,
            "rating": review.rating
        }
    );

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
    
    const handleDeleteClick = () => {
        deleteReview(review.id);
    }

    const handleModalOpen = () => {
        setModalOpen(true);
    };
    
    const handleModalClose = () => {
    setModalOpen(false);
    };

    const handleReviewChange = (event) => {
        const copiedStateReview = {...stateReview};
        copiedStateReview.content = event.target.value;
        setStateReview(copiedStateReview);
    };
    
      const handleReviewTitleChange = (event) => {
        const copiedStateReview = {...stateReview};
        copiedStateReview.title = event.target.value;
        setStateReview(copiedStateReview);
    };
    
    const handleRatingChange = (event, newRating) => {
        const copiedStateReview = {...stateReview};
        copiedStateReview.rating = newRating;
        setStateReview(copiedStateReview);
    };

    const handleModalSubmit = (event) => {
        event.preventDefault();
        editReview(stateReview, review.id);
        handleModalClose();
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
            <div id="delete_button">
                {
                    parseInt(userId) === review.user.id ? 
                    <button onClick={handleDeleteClick}>Delete Your Review</button> :
                    <></>
                } 
            </div>
            <div id="edit_button">
                {
                    parseInt(userId) === review.user.id ?
                    <Button id="editReviewButton" variant="outlined" onClick={handleModalOpen}>Edit Review</Button> :
                    <></>
                }
            </div>
            <Dialog open={modalOpen} onClose={handleModalClose} maxWidth="md">
          <DialogTitle id="reviewFormHeader"><b><u>Edit Review</u></b></DialogTitle>
            <IconButton aria-label="close" onClick={handleModalClose}>
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              <TextField
                label="Review Title"
                value={stateReview.title}
                onChange={handleReviewTitleChange}
                fullWidth
              />
              <TextField
                label="Write your review here"
                multiline
                rows={4}
                value={stateReview.content}
                onChange={handleReviewChange}
                fullWidth
              />
              <Rating
                name="rating"
                value={stateReview.rating}
                onChange={handleRatingChange}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleModalClose}>Cancel</Button>
              <Button onClick={handleModalSubmit}>Submit Edited Review</Button>
            </DialogActions>
          </Dialog>
        </>
    );
}
 
export default Review;