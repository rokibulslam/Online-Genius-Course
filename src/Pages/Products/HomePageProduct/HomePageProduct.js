import { CircularProgress, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";


const HomePageProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://boiling-oasis-12763.herokuapp.com/courses")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div style={{textAlign: 'center', paddingTop: '100px', paddingBottom:'100px'}} sx={{ py: 5 }}>
      <h1 style={{marginBottom: '50px'}}>Explore Our Course Collection</h1>
      {isLoading && (
        <div>
          <CircularProgress></CircularProgress>
        </div>
      )}
      <Box>
        <Grid container spacing={4}>
          {products.slice(0, 3)?.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              
            />
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default HomePageProduct;
