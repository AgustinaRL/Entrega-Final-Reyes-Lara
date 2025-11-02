import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./CartWidget.css";

export const CartWidget = () => {
  const { totalCantidad } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <Link to="/cart" className="cart-link">
        <span className="cart-icon">🛒</span>
        {totalCantidad > 0 && (
          <span className="cart-count">{totalCantidad}</span>
        )}
      </Link>
    </div>
  );
};
