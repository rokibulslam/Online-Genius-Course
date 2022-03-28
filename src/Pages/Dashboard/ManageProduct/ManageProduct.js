import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, NavLink } from "react-bootstrap";

import Swal from "sweetalert2";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://boiling-oasis-12763.herokuapp.com/courses")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setIsLoading(false));
  }, [isLoading]);

  // Delete a Food Item
  const handleDeleteFood = (id) => {
    const confirm = window.confirm("Are You Sure? You are going to delete Product");
    if (confirm) {
      setIsLoading(true);
      axios.delete(`https://boiling-oasis-12763.herokuapp.com/course/delete/${id}`).then((res) => {
        if (res.data.deletedCount) {
          setIsLoading(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product has been Deleted",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
    }
  };

  return (
    <div className="my-5">
      <div className="container">
        <h4 className="banner-text ">
          <i>Manage Courses</i>
        </h4>

        <div className="py-5">
          <div className="row g-5">
            {products.map((product) => (
              <div className="col-md-4 col-sm-12">
                <Card className="card-container">
                  <Card.Img className="img-fluid" style={{ borderRadius: "5px" }} variant="top" src={product?.Image} />
                  {product?.Category === "Featured" ? (
                    <div>
                      <span className="discount-text">20% Free</span>
                      <span className="card-img-text">{product?.Category}</span>
                    </div>
                  ) : (
                    <span className="card-img-text">{product?.Category}</span>
                  )}
                  <Card.Body className="text-start">
                    <Card.Title style={{ color: "rgb(134, 80, 25)", fontSize: "30px" }}>{product?.Name}</Card.Title>
                    <div className="d-flex justify-content-between align-items-center">
                      <p
                        style={{
                          background: "transparent",
                          border: "0",
                          fontSize: "20px",
                          fontWeight: "bold",
                          paddingRight: "20px",
                        }}
                      >
                        ${product?.Price}
                      </p>

                      <button onClick={() => handleDeleteFood(product._id)} className="btn btn-warning">
                        Delete Course
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
