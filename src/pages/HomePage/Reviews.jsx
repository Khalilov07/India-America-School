import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';

const reviews = [

    {
        id: 1,
        name: 'John Doe',
        rating: 5,
        comment: 'Great product! I love it.',
    },
    {
        id: 2,
        name: 'Jane Smith',
        rating: 4,
        comment: 'Good service. Will recommend to others.',
    },
    {
        id: 2,
        name: 'Jane Smith',
        rating: 4,
        comment: 'Good service. Will recommend to others.',
    },
    {
        id: 2,
        name: 'Jane Smith',
        rating: 4,
        comment: 'Good service. Will recommend to others.',
    },
    // Add more reviews as needed
];



const Reviews = () => {


    // const initialReviews = [

    //     {
    //         id: 1,
    //         name: 'John Doe',
    //         rating: 5,
    //         comment: 'Great product! I love it.',
    //     },
    //     {
    //         id: 2,
    //         name: 'Jane Smith',
    //         rating: 4,
    //         comment: 'Good service. Will recommend to others.',
    //     },
    //     // Add more reviews as needed
    // ];

    // const [reviews, setReviews] = useState(initialReviews);
    // const [newReview, setNewReview] = useState({ name: '', rating: 0, comment: '' });

    // const handleInputChange = (e) => {
    //     setNewReview({ ...newReview, [e.target.name]: e.target.value });
    // };

    // const handleRatingChange = (newValue) => {
    //     setNewReview({ ...newReview, rating: newValue });
    // };

    // console.log(reviews);

    // <Rating value={newReview.rating} onChange={(event, newValue) => handleRatingChange(newValue)} />

    return (
        <Container sx={{ width: "85%", padding: "50px 0" }}>
            <Box>
                <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
                    Customer Reviews
                </Typography>
                <div style={{
                    gap: "20px",
                    padding: "20px 0 0 0",
                    display: "flex",
                    flexWrap: "wrap ",
                    justifyContent: "space-between"
                }}>
                    {reviews.map((review) => (
                        <Box key={review.id} sx={{ marginBottom: 3, width: "300px" }}>
                            <Typography variant="h6" gutterBottom>
                                {review.name}
                            </Typography>
                            <Rating value={review.rating} readOnly />
                            <Typography variant="body1" sx={{ marginTop: 1 }}>
                                {review.comment}
                            </Typography>
                        </Box>
                    ))}
                </div>
            </Box>
        </Container>
    );
};

export default Reviews;
