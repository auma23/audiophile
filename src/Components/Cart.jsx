const Cart = ({ cartItems, removeFromCart, updateCartItemQuantity, clearCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart bg-white p-4 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <button onClick={clearCart} className="text-orange-500 hover:text-orange-700">Remove all</button>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover mr-4" />
                  <div>
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)} className="bg-gray-200 px-2 py-1">-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)} className="bg-gray-200 px-2 py-1">+</button>
                  <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500 hover:text-red-700">Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl font-bold">Total</h3>
            <p className="text-xl">${total.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
