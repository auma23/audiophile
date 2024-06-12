import { useState } from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/images/image10.png';

const Header = ({ cartItems, removeItem, clearCart, toggleQuantity }) => {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <>
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <h3>audioPhile</h3>
        </div>
        <nav className="flex-grow hidden md:flex md:justify-center md:items-center">
          <ul className="flex space-x-8">
            <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link to="/detail" className="hover:text-orange-500">Headphones</Link></li>
            <li><Link to="/speaker" className="hover:text-orange-500">Speakers</Link></li>
            <li><Link to="/earphone" className="hover:text-orange-500">Earphones</Link></li>
          </ul>
        </nav>
        <div className="relative">
          <img src={cartIcon} alt="Cart" className="h-8 cursor-pointer" onClick={toggleCart} />
          {totalItems > 0 && (
            <div className="absolute top-0 right-0 bg-orange-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-sm" onClick={toggleCart}>
              {totalItems}
            </div>
          )}
        </div>
      </header>

      {cartOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white shadow-lg p-6 w-80 rounded-lg relative">
            <button className="absolute top-2 right-2 text-gray-500" onClick={toggleCart}>
              &times;
            </button>
            <div className='flex justify-between'>
            <h2 className="text-xl font-bold mb-4">Cart ({totalItems})</h2>
            <button className="text-orange-500 mb-4" onClick={clearCart}>Remove all</button>
            </div>
            {cartItems.map(item => (
  <div key={item.id} className="flex items-center justify-between mb-4">
    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover mr-4" /> {/* Display the image here */}
    <div className="ml-4">
      <h3 className="text-lg font-bold">{item.name}</h3>
      <p>${item.price}</p>
    </div>
    <div className="flex items-center">
      <button className="px-2" onClick={() => toggleQuantity(item.id, -1)}>-</button>
      <span className="px-2">{item.quantity}</span>
      <button className="px-2" onClick={() => toggleQuantity(item.id, 1)}>+</button>
    </div>
  </div>
))}

            <div className="flex justify-between font-bold mb-4">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <Link to="/checkout">
              <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2">Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
