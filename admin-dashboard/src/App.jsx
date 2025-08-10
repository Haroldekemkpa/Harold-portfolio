import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import AdminLogin from "./pages/Login";
import { CommentProvider } from "./context/ContextApi";

export default function App() {
  return (
    <CommentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </CommentProvider>
  );
}
