import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import "./Item.css";

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.id} className="item-card">
          <img src={item.imageId} alt={item.title} className="item-img" />
          <h3>{item.title}</h3>
          <p>{item.descripcion}</p>
          <p><strong>Precio:</strong> ${item.price}</p>
          <p><strong>Stock:</strong> {item.stock}</p>
          <Link to={`/detalle/${item.id}`}>Ver detalle</Link>
          <ItemCount item={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;

