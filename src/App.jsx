// import { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Pages/Home';
// import DetailPage from './Pages/Detail';
// import Speakers from './Pages/Speakers';
// import Earphones from './Pages/Earphones';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import ProductDetailPage from './Pages/ProductDetailPage';
// import SpeakerDetailPage from './Pages/SpeakerDetailPage';
// import EarphoneDetailPage from './Pages/EarphoneDetailPage';
// import CheckoutPage from './Pages/CheckoutPage'; // Import the CheckoutPage

// function App() {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems(prevItems => {
//       const existingItem = prevItems.find(item => item.id === product.id);
//       if (existingItem) {
//         return prevItems.map(item =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + product.quantity }
//             : item
//         );
//       } else {
//         return [...prevItems, product];
//       }
//     });
//   };

//   const removeItem = (productId) => {
//     setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   const toggleQuantity = (productId, amount) => {
//     setCartItems(prevItems =>
//       prevItems.map(item =>
//         item.id === productId
//           ? { ...item, quantity: item.quantity + amount }
//           : item
//       ).filter(item => item.quantity > 0)
//     );
//   };

//   return (
//     <Router>
//       <div className="mx-10 my-1">
//         <Header
//           cartItems={cartItems}
//           removeItem={removeItem}
//           clearCart={clearCart}
//           toggleQuantity={toggleQuantity}
//         />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/speaker" element={<Speakers />} />
//             <Route path="/earphone" element={<Earphones />} />
//             <Route path="/detail" element={<DetailPage addToCart={addToCart} />} />
//             <Route path="/product/:productId" element={<ProductDetailPage addToCart={addToCart} />} />
//             <Route path="/speaker/:productId" element={<SpeakerDetailPage addToCart={addToCart} />} />
//             <Route path="/earphones/:productId" element={<EarphoneDetailPage addToCart={addToCart} />} />
//             <Route path="/checkout" element={<CheckoutPage />} /> {/* Add the checkout route */}
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import DetailPage from './Pages/Detail';
import Speakers from './Pages/Speakers';
import Earphones from './Pages/Earphones';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductDetailPage from './Pages/ProductDetailPage';
import SpeakerDetailPage from './Pages/SpeakerDetailPage';
import EarphoneDetailPage from './Pages/EarphoneDetailPage';
import CheckoutPage from './Pages/CheckoutPage'; // Import the CheckoutPage

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevItems, product];
      }
    });
  };

  const removeItem = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleQuantity = (productId, amount) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + amount }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  return (
    <Router>
      <div className="mx-10 my-1">
        <Header
          cartItems={cartItems}
          removeItem={removeItem}
          clearCart={clearCart}
          toggleQuantity={toggleQuantity}
        />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/speaker" element={<Speakers />} />
            <Route path="/earphone" element={<Earphones />} />
            <Route path="/detail" element={<DetailPage addToCart={addToCart} />} />
            <Route path="/product/:productId" element={<ProductDetailPage addToCart={addToCart} />} />
            <Route path="/speaker/:productId" element={<SpeakerDetailPage addToCart={addToCart} />} />
            <Route path="/earphones/:productId" element={<EarphoneDetailPage addToCart={addToCart} />} />
            <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} />} /> {/* Pass cartItems */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
