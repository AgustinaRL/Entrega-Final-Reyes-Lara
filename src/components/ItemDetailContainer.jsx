import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import ItemCount from "./ItemCount";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "items", id);

    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No existe el item");
        }
      })
      .catch((err) => console.log("Error al traer el item:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p style={{ color: "white" }}>Cargando item...</p>;
  if (!item) return <p style={{ color: "white" }}>Item no encontrado.</p>;

  return (
    <div className="item-detail">
      <img src={item.imageId} alt={item.title} className="item-detail-img" />
      <div className="item-detail-info">
        <h2>{item.title}</h2>
        <p>{item.descripcion}</p>
        <p><strong>Precio:</strong> ${item.price}</p>
        <p><strong>Stock:</strong> {item.stock}</p>
        <ItemCount item={item} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;



