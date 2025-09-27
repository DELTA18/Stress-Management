import React from "react";
import { Toaster } from "@/components/ui/sonner"
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Signin from "./pages/Signin.jsx";
import Checkup from "./pages/Checkup.jsx";


function App() {
  return (
    <div>
      {
        window.location.pathname === '/login' || window.location.pathname === '/signin' ? null : <Navbar />
      }
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkup" element={<Checkup />} />
      </Routes>
      <Toaster richColors />
    </div>
  );
}

export default App;
