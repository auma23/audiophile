

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../public/data.json';
import '../index.css';
import manListeningImage from '../assets/images/image7.png';

const ProductDetailPage = ({ addToCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const foundProduct = data.find(item => item.id === parseInt(productId, 10));
    setProduct(foundProduct);
  }, [productId]);

  const increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };
  const handleAddToCart = () => {
    if (quantity > 0 && product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
        image: product.image.desktop // Pass the image data here
      });
      setQuantity(0); // Reset quantity after adding to cart
    }
  };
  

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className="product-detail">
      <div className="product-hero p-4 bg-black text-white text-center">
        <h1 className="text-3xl font-bold mb-20">{product.name}</h1>
      </div>

      <div className="product-overview grid md:grid-cols-2 gap-6 p-6">
        <div className="product-image">
          <img src={product.image.desktop} alt={product.name} className="w-full" />
        </div>
        <div className="product-info">
          {product.new && (
            <p className="text-sm text-orange-400 mb-1 uppercase">New Product</p>
          )}
          <h2 className="text-3xl font-bold mb-3">{product.name}</h2>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <div className="price text-lg font-bold mb-4">${product.price}</div>
          <div className='flex justify-center'>
          <div className="flex items-center">
            <button 
              className="bg-transparent border border-gray-300 py-2 px-4" 
              onClick={decrement}
            >
              -
            </button>
            <span className="mx-4 text-lg">{quantity}</span>
            <button 
              className="bg-transparent border border-gray-300 py-2 px-4" 
              onClick={increment}
            >
              +
            </button>
          </div>
          <button 
            className="add-to-cart bg-orange-400 hover:bg-orange-200 text-white font-medium rounded-sm shadow py-0 px-8 transition duration-300 ease-in-out ml-8"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          </div>
          
        </div>
      </div>

      <div className="product-features p-6">
        <h3 className="text-2xl font-bold mb-4">Features</h3>
        <p className="text-lg text-gray-700 mb-4">{product.features}</p>
        <div className="in-the-box">
          <h4 className="text-xl font-bold mb-4">In the Box</h4>
          <ul className="list-none">
            {product.includes.map((item, index) => (
              <li key={index} className="text-lg text-gray-700">
                <span className="font-bold">{item.quantity}x</span> {item.item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="product-gallery grid md:grid-cols-3 gap-6 p-6">
        <div className="gallery-item">
          <img src={product.gallery.first.desktop} alt="Gallery Image 1" className="w-full" />
        </div>
        <div className="gallery-item">
          <img src={product.gallery.second.desktop} alt="Gallery Image 2" className="w-full" />
        </div>
        <div className="gallery-item">
          <img src={product.gallery.third.desktop} alt="Gallery Image 3" className="w-full" />
        </div>
      </div>

      <div className="related-products p-6">
        <h3 className="text-2xl font-bold mb-4">You May Also Like</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {product.others.map((otherProduct, index) => (
            <div key={index} className="related-product text-center">
              <img src={otherProduct.image.desktop} alt={otherProduct.name} className="w-full mb-4" />
              <h4 className="text-xl font-bold mb-2">{otherProduct.name}</h4>
              <button className="view-product bg-orange-400 hover:bg-orange-200 text-white font-medium rounded-sm shadow py-2 px-4 transition duration-300 ease-in-out">
                <a href={`/product/${otherProduct.id}`}>See Product</a>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="about p-6 bg-gray-100 text-center md:text-left">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* <img src="/path/to/your/image.png" alt="About Us" className="w-full md:w-1/2 ml-8 md:mb-0" /> */}
          <img src={manListeningImage} alt="Listening" className="w-full md:w-1/2 ml-8 md:mb-0" />
          <div className="md:ml-8">
            <h2 className="text-3xl font-bold">Bringing You The <span className="text-orange-500">Best</span> Audio Gear</h2>
            <p className="mt-4 text-lg">
              Located at the heart of New York City, Audiophile is the premier store for high-end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;

