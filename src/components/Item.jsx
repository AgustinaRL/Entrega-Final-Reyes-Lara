import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  return (
    <div className="item-card">
      <img
        src={item.imageId || item.imageId}
        alt={item.title}
        className="item-img"
      />
      <h3>{item.title}</h3>
      <p><strong>Precio:</strong> ${item.price}</p>
      <Link to={`/detalle/${item.id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;
