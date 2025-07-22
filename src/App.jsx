import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Kitchen from "./pages/Kitchen";
import Bar from "./pages/Bar";
import Menu from "./pages/Menu";
import Events from "./pages/Events";
import CrescoInside from "./pages/CrescoInside";
import Career from "./pages/Career";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/cresco-inside" element={<CrescoInside />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
