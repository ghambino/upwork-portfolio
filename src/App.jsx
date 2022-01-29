import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
