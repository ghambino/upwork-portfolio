import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<Home />} />
        <Route path="/Contact-us" element={<Contact />} />
        <Route path="/Project" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
