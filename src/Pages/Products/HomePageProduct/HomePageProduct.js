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
    fetch("https://immense-wildwood-96183.herokuapp.com/apartments")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div sx={{ py: 5 }}>
      <h1 className="py-4 pb-5">Explore Our Apartments Collection</h1>
      {isLoading && (
        <div>
          <CircularProgress></CircularProgress>
        </div>
      )}
      <Box>
        <Grid container spacing={4}>
          {products.slice(0, 6)?.map((product) => (
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
