import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import "./ItemCount.css";

const ItemCount = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const incrementar = () => {
    if (cantidad < item.stock) setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const handleAdd = () => {
    addToCart(item, cantidad);
  };

  return (
    <div className="item-count">
      <div className="contador">
        <button onClick={decrementar}>-</button>
        <span>{cantidad}</span>
        <button onClick={incrementar}>+</button>
      </div>
      <button onClick={handleAdd} className="agregar-btn">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
