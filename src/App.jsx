
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import Contact from "./views/Contact"; 
import { CartContext } from "./components/CartContext";
import "./App.css";

function App() {
  const { totalCantidad } = useContext(CartContext);

  return (
    <>
      <NavBar carritoCantidad={totalCantidad} />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2 style={{ color: "white" }}>Página no encontrada</h2>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
