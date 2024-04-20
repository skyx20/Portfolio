import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/pages/Home";
import React  from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
