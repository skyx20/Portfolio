import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/pages/Home";
import Contact from "./containers/pages/Contact";
import Projects from "./containers/pages/Projects";
import React from "react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <Analytics />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<Projects />} />
        <Route exact path="/projects/" element={<Projects />} />
        <Route exact path="/contact/" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
