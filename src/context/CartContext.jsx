import { useState, createContext, useContext } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [carts, setCarts] = useState([]);

  const getProductQuantity = (id) => {
    const quantity = carts.find((cart) => cart.id === id)?.quantity;
    if (!quantity) return 0;
    return quantity;
  };

  const getCartById = (id) => {
    let product = carts.find((cart) => cart.id === id);
    if (!product) {
      alert(`Product with ID: ${id} is not found`);
    }
    return product;
  };

  function increaseItemQuantity(product) {
    const itemQuantity = getProductQuantity(product.id);
    if (!itemQuantity) {
      setCarts([
        ...carts,
        {
          ...product,
          quantity: 1,
        },
      ]);
    } else {
      setCarts((carts) =>
        carts.map((cart) =>
          cart.id === product.id
            ? { ...cart, quantity: cart.quantity + 1 }
            : cart
        )
      );
    }
  }

  function decreaseItemQuantity(product) {
    const itemQuantity = getProductQuantity(product.id);
    if (itemQuantity === 1) {
      deleteItem(product.id);
    } else {
      setCarts((carts) =>
        carts.map((cart) =>
          cart.id === product.id
            ? { ...cart, quantity: cart.quantity - 1 }
            : cart
        )
      );
    }
  }

  function deleteItem(id) {
    setCarts((carts) => carts.filter((cart) => cart.id !== id));
  }

  const totalCartItem = carts
    .map((cart) => cart.quantity)
    .reduce((acc, curr) => acc + curr, 0);

  function getPriceAfterDiscount() {
    let priceAfterDiscount = 0;
    carts.map((cart) => {
      const item = getCartById(cart.id);
      priceAfterDiscount +=
        ((100 - item.discount) / 100) * item.price * item.quantity;
    });
    return priceAfterDiscount;
  }

  const contextValue = {
    carts,
    getProductQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    deleteItem,
    totalCartItem,
    getPriceAfterDiscount,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("Cart context can't be called outside it's provider");
  }
  return context;
}

export { CartProvider, useCart };
