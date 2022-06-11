/* eslint react/prefer-stateless-function: [0] */
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Calculator from './components/calculator';
import Quote from './components/quote';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </>
    );
  }
}

export default App;
