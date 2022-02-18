import {
  Grid,
  Paper,
  Typography,
  Button,
  Rating,
  Container,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Reviews.css";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="review-bg dashboard-main">
      <h1 className="">Customer's Reviews</h1>
      <Box sx={{ py: 5 }}>
        <Container>
          <Grid container spacing={2}>
            {reviews?.map((review) => (
              <Grid key={review._id} item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ p: 2, height: 250, width: 300 }}>
                  <Typography
                    sx={{ color: "error.main", fontWeight: 600 }}
                    variant="h5"
                    gutterBottom
                    component="div"
                  >
                    Reviewed By
                  </Typography>
                  <Typography
                    sx={{ color: "info.main", fontWeight: 400 }}
                    variant="h5"
                    gutterBottom
                    component="div"
                  >
                    {review.customerName}
                  </Typography>
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <Rating
                      readOnly
                      name="simple-controlled"
                      value={review.star}
                    />
                  </Box>

                  <Typography variant="h7" gutterBottom component="div">
                    {review.comment}
                  </Typography>
                  <Typography variant="h6" gutterBottom component="div">
                    {review.date}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Typography sx={{ mt: 5 }} variant="h6" gutterBottom component="div">
            <NavLink to="/dashboard/review">Give A Review</NavLink>
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Reviews;
