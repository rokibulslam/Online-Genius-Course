import { Button, Container, MenuItem, TextField } from "@mui/material";
import axios from "axios";

import React, { useState } from "react";
import Swal from "sweetalert2";

// Food Category
const categories = [
  {
    value: "Technology",
    label: "Technology",
  },
  {
    value: "Programming",
    label: "Programming",
  },
  {
    value: "Science",
    label: "Science",
  },
];

const AddProduct = () => {
  const [category, setCategory] = useState("");
  const [productDetails, setProductDetails] = useState({});
  const handleOnChange = (e) => {
    setCategory(e.target.value);
    const field = e.target.name;
    const value = e.target.value;
    const newProductDetails = { ...productDetails };
    newProductDetails[field] = value;
    setProductDetails(newProductDetails);
  };

  const handleSubmit = (e) => {
    //   Send Product to Database
    e.preventDefault();
    axios
      .post("https://boiling-oasis-12763.herokuapp.com/courses", productDetails)

      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Food Item Inserted Successfully`,
            showConfirmButton: false,
            timer: 2000,
          });
          setProductDetails({});
          window.location.reload();
        }
      });
  };
  return (
    <Container sx={{ display: "flex" }}>
      <Container className="banner-text">
        <h1 className="register-header-text ">Add A Course</h1>

        <form onSubmit={handleSubmit}>
          <TextField sx={{ width: "75%", m: 1 }} id="standard-basic" label="Course Name" name="Name" onChange={handleOnChange} variant="standard" />

          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Price"
            type="number"
            name="Price"
            onChange={handleOnChange}
            variant="standard"
          />
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Image URL"
            type="text"
            name="Image"
            onChange={handleOnChange}
            variant="standard"
          />
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Description"
            type="text"
            name="Description"
            onChange={handleOnChange}
            variant="standard"
          />
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Rating"
            type="text"
            name="Rating"
            onChange={handleOnChange}
            variant="standard"
          />
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Author"
            type="text"
            name="Author"
            onChange={handleOnChange}
            variant="standard"
          />

          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            select
            variant="standard"
            name="Category"
            label="Category"
            value={category}
            onChange={handleOnChange}
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">
            Add Course
          </Button>
        </form>
      </Container>
    </Container>
  );
};

export default AddProduct;
