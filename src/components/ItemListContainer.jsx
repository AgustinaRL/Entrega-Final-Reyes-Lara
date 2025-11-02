import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const itemsRef = collection(db, "items");
    const q = categoryId ? query(itemsRef, where("categoryId", "==", categoryId)) : itemsRef;

    getDocs(q)
      .then((res) => {
        const lista = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(lista);
      })
      .catch((err) => console.log("Error al traer items:", err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <p style={{ color: "white" }}>Cargando productos...</p>;
  if (items.length === 0) return <p style={{ color: "white" }}>No hay productos disponibles.</p>;

  return <ItemList items={items} />;
};

export default ItemListContainer;



