import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import cardOne from "../../../Images/card-1.jpg";
import "./ProductCard.css";
import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import Rating from "@mui/material/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ProductCard = (props) => {
  const [value, setValue] = React.useState(2);
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
          className="parent"
          sx={{ p: 60 }}
          style={{
            margin: "0 auto",
            width: "390px",
            boxShadow: "8px -1px 45px -13px #000000",
          }}
        >
          {/*--------------- treanding badge------------- */}
          <span className="badge trending">trending</span>

          <div className="effect" style={{ padding: "12px" }}>
            {/*--------------- card section ----------*/}
            <Card
              style={{ boxShadow: "3px 2px 28px 4px rgba(0,0,0,0.69)" }}
              sx={{ Width: 416, height: 222 }}
            >
              {/*------------card img section -----------------*/}
              <CardMedia
                component="img"
                alt="green iguana"
                height="222"
                image={cardOne}
              />
            </Card>
          </div>

          {/*-----------------------------card text section------------------ */}
          <Box
            sx={{
              display: "flex",
              // flexWrap: 'wrap',
              justifyContent: "flex-start",
              "& > :not(style)": {
                width: 390,
                height: 215,

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
                  <p style={{ fontSize: "13px", color: "#444" }}>{product?.Author}</p>
                </Typography>
              </div>

              <Box sx={{ display: "flex" }}>
                {/*------------------ rating section--------------------------*/}
                <Rating
                  sx={{ mr: 3 }}
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                ></Rating>
                <Typography>(05)</Typography>
              </Box>

              {/* ----------------------hr bar--------------------------------- */}
              <hr
                style={{
                  margin: "28px 0",
                  display: "block",
                  color: "#ecebed",
                  opacity: "0.3",
                }}
              ></hr>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "3px",
                }}
              >
                <div>
                  <Typography style={{ color: "#242f6c" }} variant="h4">
                    ${product?.Price}
                  </Typography>
                </div>
                <Box sx={{ ml: 5, display: "flex" }}>
                  <Button
                    className="btn"
                    style={{ border: "1px solid #ecebed" }}
                  >
                    <span>Preview</span>
                  </Button>
                  {/* -----------------------font awesome icon --------------------*/}
                  <FontAwesomeIcon
                    classname="icon"
                    style={{
                      borderRadius: "2px",
                      padding: "6px 13px",
                      marginLeft: "15px",
                    }}
                    className="icon"
                    icon={faShoppingCart}
                  ></FontAwesomeIcon>
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
