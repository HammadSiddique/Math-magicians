import React from 'react';
import Einstien from '../assets/einstein.png';

const Quote = () => (
  <div className="quotePage">
    <h3 className="quoteHeading">
      Pure mathematics is, in its way, the poetry of logical ideas.
    </h3>
    <h4 className="einstein">- Albert Einstein</h4>
    <img src={Einstien} alt="einstien" />
  </div>
);

export default Quote;
