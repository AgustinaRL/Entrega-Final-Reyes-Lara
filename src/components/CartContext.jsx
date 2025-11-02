import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito
  const addToCart = (item, cantidad) => {
    const exists = cart.find((prod) => prod.id === item.id);
    if (exists) {
      setCart((prev) =>
        prev.map((prod) =>
          prod.id === item.id
            ? { ...prod, cantidad: Math.min(prod.cantidad + cantidad, prod.stock) }
            : prod
        )
      );
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  // Quitar producto
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Actualizar cantidad de un producto
  const updateQuantity = (id, nuevaCantidad) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, cantidad: Math.min(Math.max(nuevaCantidad, 1), item.stock) }
          : item
      )
    );
  };

  // Limpiar carrito
  const clearCart = () => setCart([]);

  // Total de unidades en carrito
  const totalCantidad = cart.reduce((acc, item) => acc + item.cantidad, 0);

  // Total precio
  const totalPrice = () =>
    cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCantidad,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
