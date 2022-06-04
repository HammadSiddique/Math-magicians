/* eslint react/prefer-stateless-function: [0] */
import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(event) {
    this.setState((state) => calculate(state, event.target.innerText));
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="container">
        <div className="result">
          <p>{total}</p>
          <p>{operation}</p>
          <p>{next}</p>
        </div>
        <button
          type="button"
          className="operator-top"
          onClick={this.buttonClick}
        >
          AC
        </button>
        <button
          type="button"
          className="operator-top"
          onClick={this.buttonClick}
        >
          +/-
        </button>
        <button
          type="button"
          className="operator-top"
          onClick={this.buttonClick}
        >
          %
        </button>
        <button
          type="button"
          className="operator-side"
          onClick={this.buttonClick}
        >
          ÷
        </button>
        <button type="button" className="numeric" onClick={this.buttonClick}>
          7
        </button>
        <button type="button" className="numeric" onClick={this.buttonClick}>
          8
        </button>
        <button type="button" className="numeric" onClick={this.buttonClick}>
          9
        </button>
        <button
          type="button"
          className="operator-side"
          onClick={this.buttonClick}
        >
          x
        </button>
        <button type="button" className="numeric" onClick={this.buttonClick}>
          4
        </button>
        <button type="button" className="numeric" onClick={this.buttonClick}>
          5
        </button>
        <button type="button" className="numeric" onClick={this.buttonClick}>
          6
        </button>
        <button
          type="button"
          className="operator-side"
          onClick={this.buttonClick}
        >
          -
        </button>
        <button type="button" className="numeric" onClick={this.buttonClick}>
          1
        </button>
        <button type="button" className="numeric" onClick={this.buttonClick}>
          2
        </button>
        <button type="button" className="numeric" onClick={this.buttonClick}>
          3
        </button>
        <button
          type="button"
          className="operator-side"
          onClick={this.buttonClick}
        >
          +
        </button>
        <button
          type="button"
          className="numeric zero"
          onClick={this.buttonClick}
        >
          0
        </button>
        <button
          type="button"
          className="operator-top"
          onClick={this.buttonClick}
        >
          .
        </button>
        <button
          type="button"
          className="operator-side"
          onClick={this.buttonClick}
        >
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
