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
    e.target.value = "";
    const review = {
      ...reviewData,
      date: currentDate,
      star: star,
      customerName: user?.displayName,
      img: user?.photoURL,
    };
    axios
      .post("https://online-genius-course-server.onrender.com/review", review)
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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
          }}
        >
          <TextField
            required
            sx={{ m: 1 }}
            id="filled-basic"
            label="Comment Here"
            name="comment"
            onBlur={handleReviewInfo}
            variant="filled"
          />
          <Button sx={{ m: 1 }} type="submit" variant="contained">
            Add a Review
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Review;
