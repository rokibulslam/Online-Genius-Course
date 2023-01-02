import React from "react";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ProductCard.css";
import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Rating from "react-rating";

const ProductCard = (props) => {
  const { product } = props;
  return (
    <>
      <Grid
        sx={{ display: "flex", justifyContent: "center" }}
        item
        xs={12}
        md={4}
      >
        {/*----------------------- card body---------------------- */}
        <div
          className="parent img_section"
          style={{
            width: "390px",
            boxShadow: "2px 3px 45px rgba(0,0,0,0.05)",
          }}
        >
          {/*--------------- treanding badge------------- */}
          <span className="badge trending">trending</span>

          <div>
            {/*------------card img section -----------------*/}
            <CardMedia
              className="card_image"
              component="img"
              alt="green iguana"
              /* height="222" */ image={product?.Image}
            />
          </div>

          {/*-----------------------------card text section------------------ */}
          <Box
            sx={{
              display: "flex",
              width: "100%",
              // flexWrap: 'wrap',
              justifyContent: "flex-start",
              "& > :not(style)": {
                width: 390,
                padding: 3,
                borderBox: "auto",
              },
            }}
          >
            <Paper elevation={0}>
              <div>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontFamily: "'Open Sans', sans-serif",
                    color: "#525252",
                    opacity: "0.7",
                  }}
                  variant="subtitle1"
                >
                  {product?.Name}
                </Typography>
                <Typography>
                  <p style={{ fontSize: "13px", color: "#444" }}>
                    by {product?.Author}
                  </p>
                </Typography>
              </div>

              <Box sx={{ display: "flex" }}>
                {/*------------------ rating section--------------------------*/}
                <Rating
                  initialRating={product?.Rating}
                  emptySymbol="far fa-star icon-color"
                  fullSymbol="fas fa-star icon-color"
                  readonly
                ></Rating>
                {/* <Typography>(05)</Typography> */}
              </Box>

              {/* ----------------------hr bar--------------------------------- */}
              <hr
                style={{
                  margin: "28px 0",
                  display: "block",
                  color: "lightgrey",
                  opacity: "0.3",
                }}
              ></hr>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "3px",
                }}
              >
                <div>
                  <Typography style={{ color: "#242f6c" }} variant="h5">
                    ${product?.Price}
                  </Typography>
                </div>
                <Box sx={{ ml: 5, display: "flex" }}>
                  <NavLink
                    style={{
                      border: "1px solid #ecebed",
                      textTransform: "capitalize",
                    }}
                    className="text-decoration-none"
                    to={`/home/purchase/${product?._id}`}
                  >
                    <Button className="btn">
                      {" "}
                      <span>Preview</span>
                    </Button>
                  </NavLink>

                  {/* -----------------------font awesome icon --------------------*/}
                  <NavLink to={`/home/purchase/${product?._id}`}>
                    <FontAwesomeIcon
                      className="icon"
                      style={{
                        borderRadius: "2px",
                        padding: "6px 13px",
                        marginLeft: "15px",
                      }}
                      icon={faShoppingCart}
                    ></FontAwesomeIcon>
                  </NavLink>
                </Box>
              </div>
            </Paper>
          </Box>
        </div>
      </Grid>
    </>
  );
};

export default ProductCard;
