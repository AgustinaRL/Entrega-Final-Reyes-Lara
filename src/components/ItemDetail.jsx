import React from "react";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ producto, onAdd }) => {
  return (
    <div className="item-detail">
      <img src={producto.imageId} alt={producto.nombre} className="detail-img" />
      <div className="detail-info">
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p className="detail-price">Precio: ${producto.precio}</p>
        <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
