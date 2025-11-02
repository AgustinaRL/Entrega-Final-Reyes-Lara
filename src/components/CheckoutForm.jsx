import React, { useState, useContext } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  const { cart, clearCart, totalPrice } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [loading, setLoading] = useState(false);
  const [ordenId, setOrdenId] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setLoading(true);

    try {
      const orden = {
        cliente: { nombre, email, telefono },
        items: cart.map(item => ({
          id: item.id,
          title: item.title,
          cantidad: item.cantidad,
          precio: item.price
        })),
        total: totalPrice(),
        fecha: Timestamp.fromDate(new Date())
      };

      const docRef = await addDoc(collection(db, "orders"), orden);
      setOrdenId(docRef.id);
      clearCart();
    } catch (err) {
      console.error("Error al generar la orden:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p style={{ color: "#000" }}>Generando orden...</p>;

  if (ordenId) {
    return (
      <div className="checkout-success">
        <h2>¡Compra realizada con éxito!</h2>
        <p>Tu número de orden es: <strong>{ordenId}</strong></p>
        <button onClick={() => navigate("/")}>Volver al inicio</button>
      </div>
    );
  }

  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nombre" 
          value={nombre} 
          onChange={e => setNombre(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="tel" 
          placeholder="Teléfono" 
          value={telefono} 
          onChange={e => setTelefono(e.target.value)} 
          required 
        />
        <p className="total-pagar">Total a pagar: ${totalPrice()}</p>
        <button type="submit">Confirmar compra</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
