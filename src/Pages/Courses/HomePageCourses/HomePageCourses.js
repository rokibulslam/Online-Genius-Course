import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ProductCard from "../CourseCard/CourseCard";
import "./HomePageCourses.css";

const HomePageProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://online-genius-course-server.onrender.com/courses")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div
      id="product"
      style={{
        textAlign: "center",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
      sx={{ py: 5 }}
    >
      <Container>
        <Box sx={{ marginBottom: "50px" }}>
          <h1>
            TOP 3 Exclusive <span className="text-danger fw-bold">Course</span>{" "}
            Collection
          </h1>
          <p className="text-muted">
            {" "}
            Products Build and Earn with your online store with lots of cool and
            exclusive features bundled with Genius Course!
          </p>
        </Box>
        {isLoading && (
          <div>
            <svg
              className="pl"
              width="128px"
              height="128px"
              viewBox="0 0 128 128"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="pl__ring1"
                cx="64"
                cy="64"
                r="60"
                fill="none"
                stroke="hsl(3,90%,55%)"
                strokeWidth="8"
                transform="rotate(-90,64,64)"
                strokeLinecap="round"
                strokeDasharray="377 377"
                strokeDashoffset="-376.4"
              ></circle>
              <circle
                className="pl__ring2"
                cx="64"
                cy="64"
                r="52.5"
                fill="none"
                stroke="hsl(13,90%,55%)"
                strokeWidth="7"
                transform="rotate(-90,64,64)"
                strokeLinecap="round"
                strokeDasharray="329.9 329.9"
                strokeDashoffset="-329.3"
              ></circle>
              <circle
                className="pl__ring3"
                cx="64"
                cy="64"
                r="46"
                fill="none"
                stroke="hsl(23,90%,55%)"
                strokeWidth="6"
                transform="rotate(-90,64,64)"
                strokeLinecap="round"
                strokeDasharray="289 289"
                strokeDashoffset="-288.6"
              ></circle>
              <circle
                className="pl__ring4"
                cx="64"
                cy="64"
                r="40.5"
                fill="none"
                stroke="hsl(33,90%,55%)"
                strokeWidth="5"
                transform="rotate(-90,64,64)"
                strokeLinecap="round"
                strokeDasharray="254.5 254.5"
                strokeDashoffset="-254"
              ></circle>
              <circle
                className="pl__ring5"
                cx="64"
                cy="64"
                r="36"
                fill="none"
                stroke="hsl(43,90%,55%)"
                strokeWidth="4"
                transform="rotate(-90,64,64)"
                strokeLinecap="round"
                strokeDasharray="226.2 226.2"
                strokeDashoffset="-225.8"
              ></circle>
              <circle
                className="pl__ring6"
                cx="64"
                cy="64"
                r="32.5"
                fill="none"
                stroke="hsl(53,90%,55%)"
                strokeWidth="3"
                transform="rotate(-90,64,64)"
                strokeLinecap="round"
                strokeDasharray="204.2 204.2"
                strokeDashoffset="-203.9"
              ></circle>
            </svg>
          </div>
        )}
        <Box>
          <Grid container spacing={2}>
            {products.slice(0, 3)?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default HomePageProduct;
