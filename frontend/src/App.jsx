import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import Nav from "./components/common/Nav";
import { useStore, cartStore } from "./store/stores";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
