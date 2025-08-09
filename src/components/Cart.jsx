export default function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4 border rounded-lg shadow bg-white">
      <h2 className="text-xl font-bold mb-2">Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center mb-2">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>${item.price * item.quantity}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-2 text-red-500"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 font-bold">Total: ${total}</div>
    </div>
  );
}
