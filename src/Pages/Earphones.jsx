// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import manListeningImage from '../assets/images/image7.png';
// import data from '../data.json';
// import '../index.css';

// const Earphones = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Assuming the data is fetched from the data.json file
//     setProducts(data);
//   }, []);

//   // Filter earphones from products array
//   const earphones = products.filter(product => product.category === 'earphones');

//   return (
//     <section>
//       <div className="p-4 bg-black">
//         <h1 className="text-3xl font-bold text-center mb-20 text-white">Earphones</h1>
//       </div>

//       {/* Render all earphone products */}
//       {earphones.map((product, index) => (
//         <div
//           key={index}
//           className={`bg-gray-100 rounded-lg shadow-md overflow-hidden p-6 flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center md:items-stretch space-y-6 md:space-y-0 md:space-x-6`}
//         >
//           <div className="flex-1 flex justify-center md:justify-start">
//             <img
//               className="max-w-full h-auto md:max-w-[200px] object-cover rounded-lg"
//               src={product.image.desktop}
//               alt={product.name}
//             />
//           </div>
//           <div className="flex-1 text-center md:text-left">
//             {product.new && (
//               <p className="text-sm text-orange-400 mb-1 spaced-out">NEW PRODUCT</p>
//             )}
//             <h2 className="text-3xl font-bold mb-3">{product.name}</h2>
//             <p className="text-lg text-gray-700 mb-4">{product.description}</p>
//             <Link to="/detail" className="bg-orange-400 hover:bg-orange-200 text-white font-medium rounded-sm shadow py-2 px-4 transition duration-300 ease-in-out">
//               See Product
//             </Link>
//           </div>
//         </div>
//       ))}

//       <section className="products grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 md:p-16">
//         {/* Placeholder for other product cards */}
//         {products.slice(0, 3).map((product, index) => (
//           <div
//             key={index}
//             className="product-card relative bg-gray-200 p-8 text-center flex flex-col items-center"
//           >
//             <div className="image-container absolute -top-16 p-4 shadow-md">
//               <img
//                 src={product.image.desktop}
//                 alt={product.name}
//                 className="w-24 h-auto"
//               />
//             </div>
//             <div className="content mt-16">
//               <h2 className="text-2xl font-bold mb-4">{product.name.toUpperCase()}</h2>
//               <Link to="/detail" className="shop-button mt-4 px-4 py-2 text-orange-500 font-bold hover:text-orange-600">Shop <span>&#x2B9E;</span></Link>
//             </div>
//           </div>
//         ))}
//       </section>

//       <section className="about mb-4 bg-gray-100 md:p-2 text-center md:text-left">
//         <div className="container mx-auto flex flex-col md:flex-row-reverse items-center">
//           <img src={manListeningImage} alt="Listening" className="w-full md:w-1/2 ml-8 md:mb-0" />
//           <div className="md:ml-8">
//             <h2 className="text-3xl font-bold">Bringing You The <span className="text-orange-500">Best</span> Audio Gear</h2>
//             <p className="mt-4 text-lg">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// };

// export default Earphones;
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import manListeningImage from '../assets/images/image7.png';
import data from '../../public/data.json';
import '../index.css';

const Earphones = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Assuming the data is fetched from the data.json file
    setProducts(data);
  }, []);

  // Filter earphones from products array
  const earphones = products.filter(product => product.category === 'earphones');

  return (
    <section>
      <div className="p-4 bg-black">
        <h1 className="text-3xl font-bold text-center mb-20 text-white">Earphones</h1>
      </div>

      {/* Render all earphone products */}
      {earphones.map((product, index) => (
        <div
          key={index}
          className={`bg-gray-100 rounded-lg shadow-md overflow-hidden p-6 flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center md:items-stretch space-y-6 md:space-y-0 md:space-x-6`}
        >
          <div className="flex-1 flex justify-center md:justify-start">
            <img
              className="max-w-full h-auto md:max-w-[200px] object-cover rounded-lg"
              src={product.image.desktop}
              alt={product.name}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            {product.new && (
              <p className="text-sm text-orange-400 mb-1 spaced-out">NEW PRODUCT</p>
            )}
            <h2 className="text-3xl font-bold mb-3">{product.name}</h2>
            <p className="text-lg text-gray-700 mb-4">{product.description}</p>
            <Link to={`/earphones/${product.id}`} className="bg-orange-400 hover:bg-orange-200 text-white font-medium rounded-sm shadow py-2 px-4 transition duration-300 ease-in-out">
              See Product
            </Link>
          </div>
        </div>
      ))}

      <section className="products grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 md:p-16">
        {/* Placeholder for other product cards */}
        {products.slice(0, 3).map((product, index) => (
          <div
            key={index}
            className="product-card relative bg-gray-200 p-8 text-center flex flex-col items-center"
          >
            <div className="image-container absolute -top-16 p-4 shadow-md">
              <img
                src={product.image.desktop}
                alt={product.name}
                className="w-24 h-auto"
              />
            </div>
            <div className="content mt-16">
              <h2 className="text-2xl font-bold mb-4">{product.name.toUpperCase()}</h2>
              <Link to={`/earphones/${product.id}`} className="shop-button mt-4 px-4 py-2 text-orange-500 font-bold hover:text-orange-600">Shop <span>&#x2B9E;</span></Link>
            </div>
          </div>
        ))}
      </section>

      <section className="about mb-4 bg-gray-100 md:p-2 text-center md:text-left">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center">
          <img src={manListeningImage} alt="Listening" className="w-full md:w-1/2 ml-8 md:mb-0" />
          <div className="md:ml-8">
            <h2 className="text-3xl font-bold">Bringing You The <span className="text-orange-500">Best</span> Audio Gear</h2>
            <p className="mt-4 text-lg">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Earphones;

