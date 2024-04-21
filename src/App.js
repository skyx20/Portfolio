import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/pages/Home";
import Contact from "./containers/pages/Contact";
import Projects from "./containers/pages/Projects";
import React  from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/projects/' element={<Projects/>} />
        <Route exact path='/contact/' element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
