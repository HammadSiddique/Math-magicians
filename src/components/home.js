import React from 'react';
import mathBg from '../assets/math2png.png';

const Home = () => (
  <div className="home-page">
    <h1 className="heading">Welcome to our page!</h1>
    <p className="description">
      A Calculator is an electronic hardware device or software capable of
      performing mathematical calculations, such as addition, multiplication,
      subtraction, or division. The Casio Computer Company developed the first
      electronic calculator in 1957. Since then, calculators have come in many
      sizes and are built into most operating systems on computers, smartphones,
      and tablets.
    </p>
    <img src={mathBg} alt="background" />
  </div>
);

export default Home;
