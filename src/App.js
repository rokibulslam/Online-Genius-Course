

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import ManageOrder from "./Pages/Dashboard/ManageOrder/ManageOrder";
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import Review from "./Pages/Dashboard/Review/Review";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Home/Navbar/Navbar";
import Purchase from "./Pages/Purchase.js/Purchase";
import Login from "./Pages/Shared/Login/Login";
import PrivateRoute from "./Pages/Shared/PrivateRoute/PrivateRoute";
import Register from "./Pages/Shared/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/home/purchase/:id"
              element={
                <PrivateRoute>
                  <Purchase />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/dashboard/myOrders" element={<MyOrder />}></Route>
              <Route path="/dashboard/orders" element={<ManageOrder />}></Route>
              <Route path="/dashboard/review" element={<Review />}></Route>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
