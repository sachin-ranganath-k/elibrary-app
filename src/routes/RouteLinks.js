import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLogin from "../components/user/UserLogin";
import UserRegister from "../components/user/UserRegister";

const RouteLinks = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/signup" element={<UserRegister />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RouteLinks;
