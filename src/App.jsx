import { useState } from "react";
import { products } from "./data";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./index.css";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        🛒 Carrito de Compras
      </h1>
      <ProductList products={products} addToCart={addToCart} />
      <div className="mt-6">
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}
