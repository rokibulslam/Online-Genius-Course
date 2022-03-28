import React from "react";
import { Link } from "react-router-dom";
import error from "../../Image/404.jpg";

const Notfound = () => {
  return (
    <div className="container">
      <div className="m-5 pt-5 ps-5 ps-sm-0">
        <img className="img-fluid d-block mx-auto" src={error} alt="" />
      </div>
      <Link to="/home" className="text-decoration-none">
        <button className=" d-block mx-auto py-2 px-3 bg-warning text-dark border-0 rounded">Back to Home</button>
      </Link>
    </div>
  );
};

export default Notfound;
