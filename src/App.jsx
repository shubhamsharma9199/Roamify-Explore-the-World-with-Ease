//import { useState } from "react";
import "./App.css";
import About from "./components/routes/About";
import Home from "./components/routes/Home";
import { Route, Routes } from "react-router-dom";
import Service from "./components/routes/Service";
import Contact from "./components/routes/contact";

//import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
