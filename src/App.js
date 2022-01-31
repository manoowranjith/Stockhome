import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Details from './Components/Details';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/stockhome" element={<Home/>}></Route>
          <Route path="/:type/:id" element={<Details/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
