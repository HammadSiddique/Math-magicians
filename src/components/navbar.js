import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <h2 className="logo">Math Magicians</h2>
    <nav>
      <Link to="/" className="nav-item">
        Home
      </Link>
      <Link to="/calculator" className="nav-item">
        Calculator
      </Link>
      <Link to="/quote" className="nav-item">
        Quote
      </Link>
    </nav>
  </header>
);

export default Navbar;
