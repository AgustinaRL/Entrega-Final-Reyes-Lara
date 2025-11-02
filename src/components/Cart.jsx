import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  if (cart.length === 0)
    return <p style={{ color: "white" }}>Carrito vacío</p>;

  return (
    <div className="cart-container">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.imageId} alt={item.title} className="cart-item-img" />
          <div className="cart-item-info">
            <h3>{item.title}</h3>
            <p><strong>Precio:</strong> ${item.price}</p>
            <p>
              <strong>Stock:</strong> {item.stock} | 
              <strong> Cantidad:</strong> 
              <input
                type="number"
                min="1"
                max={item.stock}
                value={item.cantidad}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
              />
            </p>
            <p><strong>Subtotal:</strong> ${item.price * item.cantidad}</p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="remove-btn"
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}

      <div className="cart-total">
        <h3>Total: ${totalPrice()}</h3>
        <button onClick={() => navigate("/checkout")}>
          Ir al formulario de compra
        </button>
        <button onClick={clearCart} className="clear-btn">
          Vaciar carrito
        </button>
      </div>
    </div>
  );
};

export default Cart;
