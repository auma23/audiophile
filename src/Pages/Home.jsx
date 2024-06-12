import { Link } from 'react-router-dom';
import Products from '../Components/Products.jsx';
import headphonesImage from '../assets/images/image1.png';
import zx9SpeakerImage from '../assets/images/image8.png';
import zx7SpeakerImage from '../assets/images/image3.png';
import yx1EarphonesImage from '../assets/images/image4.png';
import manListeningImage from '../assets/images/image7.png';
import '../index.css';

const Home = () => {
  return (
    <div>
      <section className="hero bg-black text-white p-8 md:p-16 flex flex-col md:flex-row items-center justify-between relative" style={{ backgroundImage: `url(${headphonesImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="relative z-10 max-w-md md:max-w-xl lg:max-w-2xl text-center md:text-left">
    <h2 className="text-sm uppercase tracking-widest text-gray-400 spaced-out">New Product</h2>
    <h1 className="text-4xl md:text-6xl font-bold">XX99 MARK II HEADPHONES</h1>
    <p className="mt-4 md:mt-8 text-lg md:text-xl">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
    <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-bold hover:bg-orange-600">See Product</button>
  </div>
</section>
<section className="products grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 md:p-16">
  <div className="product-card relative bg-gray-200 p-8 text-center flex flex-col items-center">
    <div className="image-container absolute -top-16 p-4 shadow-md">
      <img src={zx9SpeakerImage} alt="ZX9 Speaker" className="w-24 h-auto" />
    </div>
    <div className="content mt-16">
      <h2 className="text-2xl font-bold mb-4">ZX9 SPEAKER</h2>
      <Link to="/detail" className="shop-button mt-4 px-4 py-2 text-orange-500 font-bold hover:text-orange-600">Shop <span>&#x2B9E;</span></Link>
    </div>
  </div>
  <div className="product-card relative bg-gray-200 text-center flex flex-col items-center">
    <div className="image-container absolute -top-16 shadow-md">
      <img src={zx7SpeakerImage} alt="ZX7 Speaker" className="w-24 h-auto" />
    </div>
    <div className="content mt-16">
      <h2 className="text-2xl font-bold mb-4">ZX7 SPEAKER</h2>
      <Link to="/detail" className="shop-button mt-4 px-4 py-2 text-orange-500 font-bold hover:text-orange-600">Shop <span>&#x2B9E;</span></Link>
    </div>
  </div>
  <div className="product-card relative bg-gray-200  text-center flex flex-col items-center">
    <div className="image-container absolute -top-16 shadow-md">
      <img src={yx1EarphonesImage} alt="YX1 Earphones" className="w-24 h-auto" />
    </div>
    <div className="content mt-16">
      <h2 className="text-2xl font-bold mb-4">YX1 EARPHONES</h2>
      <Link to="/detail" className="shop-button mt-4 px-4 py-2 text-orange-500 font-bold hover:text-orange-600">Shop <span>&#x2B9E;</span></Link>
    </div>
  </div>
</section>
      <div>
        <Products />
      </div>

      <section className="about mb-4 bg-gray-100 md:p-2 text-center md:text-left">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center">
          <img src={manListeningImage} alt="Listening" className="w-full md:w-1/2 ml-8 md:mb-0" />
          <div className="md:ml-8">
            <h2 className="text-3xl font-bold">Bringing You The <span className="text-orange-500">Best</span> Audio Gear</h2>
            <p className="mt-4 text-lg">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
