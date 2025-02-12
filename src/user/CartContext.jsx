import { createContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [playlistItems, setPlaylistItems] = useState([]);

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, playlistItems, setPlaylistItems }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext as default, CartProvider };
