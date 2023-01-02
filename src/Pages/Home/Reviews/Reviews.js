import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import "./Reviews.css";
import { Card, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Rating from "react-rating";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://online-genius-course-server.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  // react-slick animation
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    slidesToScroll: 4,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Box sx={{ py: 12 }}>
      <Box className="text-center mx-auto mb-5">
        <Typography variant="h4" className="fw-bold">
         
          Customer's <span className="text-danger">Review</span>
        </Typography>
        <Typography className="text-muted">
          Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, <br /> blandit posuere ligula varius congue cursus
          porta feugiat
        </Typography>
      </Box>
      <div className="container mx-auto">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index}>
              <Card className="border-0 shadow  my-2 p-3 text-center mx-2">
                <CardMedia
                  component="img"
                  sx={{ width: "80px", height: "80px", borderRadius: "50%", margin: "0 auto" }}
                  image={review?.img}
                  alt="Paella dish"
                />
                <Box>
                  <Typography>
                    <small className="text-muted">"{review?.comment}"</small>
                  </Typography>
                  <Typography className="text-start">{review?.customerName}</Typography>
                  <Typography className="d-flex justify-content-between align-items-center">
                    <i>
                      <small>Date: {review?.date}</small>
                    </i>
                    <Box
                      sx={{
                        "& > legend": { mt: 2 },
                      }}
                    >
                      <Rating initialRating={review?.star} emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color" readonly></Rating>
                    </Box>
                  </Typography>
                </Box>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </Box>
  );
};

export default Reviews;
