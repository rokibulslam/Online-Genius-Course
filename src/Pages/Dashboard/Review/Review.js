import { Rating, TextField, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const Review = () => {
  const { user } = useAuth();
  const [star, setStar] = React.useState(1);
  const [reviewData, setReviewData] = useState({});

  const date = new Date();
  const currentDate = date.toLocaleDateString();
  const handleReviewInfo = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReviewData = { ...reviewData };
    newReviewData[field] = value;
    setReviewData(newReviewData);
  };
  const onSubmitReview = (e) => {
    const review = {
      ...reviewData,
      date: currentDate,
      star: star,
      customerName: user?.displayName,
    };
    axios
      .post("https://boiling-oasis-12763.herokuapp.com/review", review)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Reviewed Successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });

    e.preventDefault();
  };

  return (
    <Box>
      <Box 
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">Give us Rating</Typography>
        <Rating
          name="simple-controlled"
          value={star}
          onChange={(event, newValue) => {
            setStar(newValue);
          }}
        />
      </Box>
      <form onSubmit={onSubmitReview}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            required
            sx={{ width: "25%", m: 1 }}
            id="filled-basic"
            label="Comment Here"
            name="comment"
            onBlur={handleReviewInfo}
            variant="filled"
          />
          <Button sx={{ width: "25%", m: 1 }} type="submit" variant="contained">
            Add a Review
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Review;
