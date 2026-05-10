
  import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app/App.tsx";
import Home from "./app/pages/Home.tsx";
import About from "./app/pages/About.tsx";
import Services from "./app/pages/Services.tsx";
import Contact from "./app/pages/Contact.tsx";
import Login from "./app/pages/Login.tsx";
import Register from "./app/pages/Register.tsx";
import Dashboard from "./app/pages/Dashboard.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);
  