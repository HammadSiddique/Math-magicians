/* eslint react/prefer-stateless-function: [0] */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const buttonClick = (event) => {
    setState(calculate(state, event.target.innerText));
  };
  const { total, operation, next } = state;

  return (
    <section className="calc-page">
      <h2 className="heading">Lets do some Math!</h2>
      <div className="container">
        <div className="result">
          {total}
          {operation}
          {next}
        </div>
        <button type="button" className="operator-top" onClick={buttonClick}>
          AC
        </button>
        <button type="button" className="operator-top" onClick={buttonClick}>
          +/-
        </button>
        <button type="button" className="operator-top" onClick={buttonClick}>
          %
        </button>
        <button type="button" className="operator-side" onClick={buttonClick}>
          ÷
        </button>
        <button type="button" className="numeric" onClick={buttonClick}>
          7
        </button>
        <button type="button" className="numeric" onClick={buttonClick}>
          8
        </button>
        <button type="button" className="numeric" onClick={buttonClick}>
          9
        </button>
        <button type="button" className="operator-side" onClick={buttonClick}>
          x
        </button>
        <button type="button" className="numeric" onClick={buttonClick}>
          4
        </button>
        <button type="button" className="numeric" onClick={buttonClick}>
          5
        </button>
        <button type="button" className="numeric" onClick={buttonClick}>
          6
        </button>
        <button type="button" className="operator-side" onClick={buttonClick}>
          -
        </button>
        <button type="button" className="numeric" onClick={buttonClick}>
          1
        </button>
        <button type="button" className="numeric" onClick={buttonClick}>
          2
        </button>
        <button type="button" className="numeric" onClick={buttonClick}>
          3
        </button>
        <button type="button" className="operator-side" onClick={buttonClick}>
          +
        </button>
        <button type="button" className="numeric zero" onClick={buttonClick}>
          0
        </button>
        <button type="button" className="operator-top" onClick={buttonClick}>
          .
        </button>
        <button type="button" className="operator-side" onClick={buttonClick}>
          =
        </button>
      </div>
    </section>
  );
};

export default Calculator;
