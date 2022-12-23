import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Dropdown, DropdownButton, Table } from "react-bootstrap";
import Swal from "sweetalert2";
const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  const [update, setUpdate] = useState("");

  useEffect(() => {
    fetch("https://online-genius-course-server.onrender.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [update]);

  const handlePending = (id, text) => {
    axios
      .put(
        `https://online-genius-course-server.onrender.com/order/status/${id}`,
        {
          status: text,
        }
      )
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Order has been ${text}`,
            showConfirmButton: false,
            timer: 2000,
          });
          setUpdate(res.data);
        }
      });
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Are You Sure? You are going to cancel your order");

    if (confirm) {
      axios
        .delete(
          `https://online-genius-course-server.onrender.com/order/delete/${id}`
        )
        .then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Order has been Cancelled Successfully",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        })
        .then((data) => setUpdate(data));
    }
  };
  return (
    <div className="my-0 p-5 bg-white banner-text">
      <div className="container ">
        <div>
          <h1 className="fw-bold mb-5">Manage All Orders</h1>
          <Table responsive striped bordered hover>
            <thead>
              <tr className="">
                <th>Product</th>
                <th>Ordered By</th>
                <th>Email</th>

                <th>Placed</th>
                <th>Status</th>
                <th>Price</th>
                <th>Manage</th>
              </tr>
            </thead>
            {orders?.map((order) => (
              <tbody>
                <tr className="py-5">
                  <td>
                    {console.log(order)}
                    <div className="d-flex align-items-center justify-content-between">
                      <img
                        style={{
                          height: "50px",
                          width: "50px",
                          borderRadius: "50%",
                          marginLeft: "3px",
                        }}
                        src={order.Image}
                        alt=""
                      />
                      {order.Name}
                    </div>
                  </td>
                  <td>{order.customerName}</td>
                  <td>{order.email}</td>

                  <td>{order.date}</td>
                  <td className="fw-bold">${order.Price}</td>
                  {order.status === "Pending" ? (
                    <td>
                      <span
                        style={{
                          color: "rgb(172, 9, 3)",
                          margin: "0px",
                          padding: "5px 8px",
                          borderRadius: "3px",
                        }}
                      >
                        {order.status}
                      </span>
                    </td>
                  ) : (
                    <td>
                      <span
                        style={{
                          color: "white",
                          backgroundColor: "rgb(2, 155, 66)",
                          margin: "0px",
                          padding: "5px 8px",
                          borderRadius: "3px",
                        }}
                      >
                        {order.status}
                      </span>
                    </td>
                  )}
                  {console.log(order)}
                  <td>
                    <DropdownButton size="sm" variant="secondary" title="Manage Order">
                      <Dropdown.Item href="#/action-1">
                        <button
                          style={{
                            color: "white",
                            border: "0px",
                            backgroundColor: "green",
                            borderRadius: "3px",
                          }}
                          onClick={() => handlePending(order._id, "Approved")}
                        >
                          Approved Order
                        </button>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <button
                          style={{
                            color: "white",
                            border: "0px",
                            backgroundColor: "green",
                            borderRadius: "3px",
                          }}
                          onClick={() => handlePending(order._id, "Shipping")}
                        >
                          Shipping
                        </button>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        <button
                          style={{
                            color: "white",
                            border: "0px",
                            backgroundColor: "red",
                            borderRadius: "3px",
                          }}
                          onClick={() => handleDelete(order._id)}
                        >
                          Reject Order
                        </button>
                      </Dropdown.Item>
                    </DropdownButton>
                    <br />
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
