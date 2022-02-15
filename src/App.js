
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Home/Navbar/Navbar";
import Login from "./Pages/Shared/Login/Login";
import Register from "./Pages/Shared/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
