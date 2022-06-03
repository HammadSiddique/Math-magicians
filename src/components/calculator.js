/* eslint react/prefer-stateless-function: [0] */
import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="result">0</div>
        <button type="button" className="operator-top">
          AC
        </button>
        <button type="button" className="operator-top">
          +/-
        </button>
        <button type="button" className="operator-top">
          %
        </button>
        <button type="button" className="operator-side">
          ÷
        </button>
        <button type="button" className="numeric">
          7
        </button>
        <button type="button" className="numeric">
          8
        </button>
        <button type="button" className="numeric">
          9
        </button>
        <button type="button" className="operator-side">
          X
        </button>
        <button type="button" className="numeric">
          4
        </button>
        <button type="button" className="numeric">
          5
        </button>
        <button type="button" className="numeric">
          6
        </button>
        <button type="button" className="operator-side">
          -
        </button>
        <button type="button" className="numeric">
          1
        </button>
        <button type="button" className="numeric">
          2
        </button>
        <button type="button" className="numeric">
          3
        </button>
        <button type="button" className="operator-side">
          +
        </button>
        <button type="button" className="numeric zero">
          0
        </button>
        <button type="button" className="operator-top">
          .
        </button>
        <button type="button" className="operator-side">
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
