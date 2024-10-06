// src/App.js
import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>Welcome to DL Prep Project!</h1>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
