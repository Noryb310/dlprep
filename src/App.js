// src/App.js
import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MainScreen from './Components/MainScreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainScreen />
      <Footer />
    </div>
  );
}

export default App;
