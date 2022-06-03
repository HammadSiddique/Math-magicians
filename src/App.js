/* eslint react/prefer-stateless-function: [0] */
import React from 'react';
import './App.css';
import Calculator from './components/calculator';

class App extends React.Component {
  render() {
    return <Calculator />;
  }
}

export default App;
