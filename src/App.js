import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import useAuth from "./Hooks/useAuth";
import AddCourse from "./Pages/Dashboard/AddCourse/AddCourse";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import ManageOrder from "./Pages/Dashboard/ManageOrder/ManageOrder";
import ManageCourse from "./Pages/Dashboard/ManageCourse/ManageCourse";
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import Review from "./Pages/Dashboard/Review/Review";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Home/Navbar/Navbar";
import Notfound from "./Pages/Notfound/Notfound";
import Courses from "./Pages/Courses/Courses/Courses";
import Purchase from "./Pages/Purchase.js/Purchase";
import Login from "./Pages/Shared/Login/Login";
import PrivateRoute from "./Pages/Shared/PrivateRoute/PrivateRoute";
import Register from "./Pages/Shared/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Courses />} />
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
            <Route index element={<MyOrder />}></Route>
            <Route path="addProduct" element={<AddCourse />}></Route>
            <Route path="myOrders" element={<MyOrder />}></Route>
            <Route path="orders" element={<ManageOrder />}></Route>
            <Route path="review" element={<Review />}></Route>
            <Route path="manageProduct" element={<ManageCourse />}></Route>
          </Route>
          <Route path="*" element={<Notfound></Notfound>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
