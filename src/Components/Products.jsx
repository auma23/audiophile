import zx9Image from '../assets/images/image3.png';
import zx7Image from '../assets/images/image8.png';
import yx1Image from '../assets/images/image6.png';

const Products = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between bg-orange-400 p-4 md:p-8 rounded-lg items-center">
        <img src={zx9Image} alt="ZX9 Speaker" className="rounded-lg w-1/2 md:w-1/3" />
        <div className="text-white md:w-1/2 pl-4 md:pl-8">
          <h2 className="text-2xl md:text-4xl font-bold">ZX9 SPEAKER</h2>
          <p className="my-4 md:my-4">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <button className="bg-black text-white px-4 md:px-6 py-2 rounded hover:bg-gray-800">SEE PRODUCT</button>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-between bg-gray-200 p-2 md:p-4 rounded-lg items-center">
        <img src={zx7Image} alt="ZX7 Speaker" className="rounded-lg w-1/3 md:w-1/4" />
        <div className="text-black md:w-1/3 pl-4 md:pl-2">
          <h2 className="text-2xl md:text-4xl font-bold my-4">ZX7 SPEAKER</h2>
          <button className="bg-black text-white px-4 md:px-6 py-2 rounded hover:bg-gray-800">SEE PRODUCT</button>
        </div>
      </div>
      <div className="flex bg-gray-200 mb-4  justify-between p-4 md:p-4 rounded-lg items-center">
        <img src={yx1Image} alt="YX1 Earphones" className="rounded-lg w-1/3 md:w-1/4" />
        <div className="text-black md:w-1/3 pl-4 md:pl-2">
          <h2 className="text-2xl md:text-4xl font-bold my-4">YX1 EARPHONES</h2>
          <button className="bg-black text-white px-4 md:px-6 py-2 rounded hover:bg-gray-800">SEE PRODUCT</button>
        </div>
      </div>
    </div>
  );
};

export default Products;

