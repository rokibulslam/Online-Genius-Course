import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Purchase = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [product, setProduct] = useState({});
  const [orderData, setOrderData] = useState({});

  const { Name, Price, Category, Description, Image } = product;

  useEffect(() => {
    fetch(`https://online-genius-course-server.onrender.com/course/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handelOrderField = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newOrderData = { ...orderData };
    newOrderData[field] = value;
    setOrderData(newOrderData);
  };

  const date = new Date();
  const currentDate = date.toLocaleDateString();
  // Add Purchased data to database
  const onSubmitOrder = (e) => {
    const order = {
      ...orderData,
      Image: product.Image,
      date: currentDate,
      status: "Pending",
      Name: Name,
      Price: Price,
      customerName: user.displayName,
      email: user?.email,
    };
    axios
      .post("https://online-genius-course-server.onrender.com/orders", order)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your order has been placed",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <Box>
        <Typography className="fw-bold" sx={{ textAlign: "center", mt: 5, color: "warning.main" }} variant="h3" component="div" gutterBottom>
          Purchase Now
        </Typography>
        <hr className="container" />

        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box>
                <Card className="border-0 shadow mb-2">
                  <CardActionArea>
                    <CardMedia component="img" height="100%" width="100%" image={Image} alt="green iguana" />
                    <CardContent sx={{ textAlign: "start" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        Name: {Name}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        Category: {Category}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        Price:${Price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {Description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions></CardActions>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Container>
                  <form onSubmit={onSubmitOrder}>
                    <TextField
                      // required
                      sx={{ width: "90%", m: 1, mt: 0 }}
                      disabled
                      id="outlined-basic"
                      label={user?.displayName}
                      name="customerName"
                      onBlur={handelOrderField}
                      variant="outlined"
                    />
                    <TextField sx={{ width: "90%", m: 1 }} disabled id="outlined-basic" label={user.email} type="email" variant="outlined" />
                    <TextField
                      required
                      sx={{ width: "90%", m: 1 }}
                      id="filled-basic"
                      label="Phone"
                      type="number"
                      name="phone"
                      onBlur={handelOrderField}
                      variant="filled"
                    />
                    <TextField
                      required
                      sx={{ width: "90%", m: 1 }}
                      id="filled-basic"
                      label="City"
                      name="city"
                      onBlur={handelOrderField}
                      variant="filled"
                    />
                    <TextField
                      required
                      sx={{ width: "90%", m: 1 }}
                      id="filled-basic"
                      label="Post-Code"
                      name="postCode"
                      onBlur={handelOrderField}
                      variant="filled"
                    />
                    <TextField
                      required
                      sx={{ width: "90%", m: 1 }}
                      id="filled-basic"
                      label="Country"
                      name="country"
                      onBlur={handelOrderField}
                      variant="filled"
                    />
                    <TextField
                      // required
                      sx={{ width: "90%", m: 1 }}
                      disabled
                      id="outlined-basic"
                      label={currentDate}
                      name="customerName"
                      onBlur={handelOrderField}
                      variant="outlined"
                    />

                    <Button
                      sx={{
                        width: "90%",
                        m: 1,
                        color: "warning.main",
                        border: 1,
                      }}
                      type="submit"
                      variant="Outlined"
                    >
                      Add Cart
                    </Button>
                  </form>
                </Container>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Purchase;
