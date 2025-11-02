import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import "./NavBar.css";
import logo from "../assets/logotipo.jpg";

export const NavBar = ({ carritoCantidad }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <h1>Lecturas Mágicas</h1>
      </div>

      <div 
        className={`navbar-center ${menuOpen ? 'active' : ''}`} 
        onClick={() => setMenuOpen(false)}
      >
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/category/libros">Libros</Link></li>
          <li><Link to="/category/lamparas">Lámparas</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        <CartWidget carritoCantidad={carritoCantidad} />
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};