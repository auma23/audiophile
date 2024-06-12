import { useState, useEffect } from 'react';
import Select from 'react-select';
import countryList from 'country-list';

const countries = countryList.getData();

const CheckoutPage = ({ cartItems }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    country: 'United States',
    paymentMethod: 'e-Money',
    emoneyNumber: '',
    emoneyPin: '',
  });

  const [summary, setSummary] = useState({
    total: 0,
    shipping: 50,
    vat: 0,
    grandTotal: 0,
  });

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const vat = total * 0.2; 
    const grandTotal = total + summary.shipping + vat;
    setSummary({
      ...summary,
      total,
      vat,
      grandTotal,
    });
  }, [cartItems]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCountryChange = (selectedOption) => {
    setForm({
      ...form,
      country: selectedOption.value,
    });
  };

  const handlePaymentMethodChange = (e) => {
    const { value } = e.target;
    setForm({
      ...form,
      paymentMethod: value,
    });
  };

  const handleSubmit = () => {
    if (
      form.name &&
      form.email &&
      form.phone &&
      form.address &&
      form.zip &&
      form.city &&
      form.country &&
      (form.paymentMethod === 'e-Money' ? form.emoneyNumber && form.emoneyPin : true)
    ) {
      setPopupMessage('Order success');
      setShowPopup(true);
    } else {
      setPopupMessage('Please enter billing details');
      setShowPopup(true);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const countryOptions = countries.map((country) => ({
    value: country.code,
    label: country.name,
  }));

  return (
    <div className="flex justify-center p-10">
      <div className="w-1/2 pr-8">
        <h2 className="text-3xl font-bold mb-8">Checkout</h2>
        <div>
          <h3 className="text-xl font-semibold mb-4">Billing Details</h3>
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <span className="text-red-500 text-sm">Wrong format</span>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Shipping Info</h3>
          <div className="mb-4">
            <label className="block mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex mb-4">
            <div className="mr-2 w-1/2">
              <label className="block mb-2">ZIP Code</label>
              <input
                type="text"
                name="zip"
                value={form.zip}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-2">City</label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Country</label>
            <Select
              options={countryOptions}
              value={{ label: form.country, value: form.country }}
              onChange={handleCountryChange}
              className="w-full"
            />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              name="paymentMethod"
              value="e-Money"
              checked={form.paymentMethod === 'e-Money'}
              onChange={handlePaymentMethodChange}
              className="mr-2"
            />
            <label className="mr-4">e-Money</label>
            
            <input
              type="radio"
              name="paymentMethod"
              value="Cash on Delivery"
              checked={form.paymentMethod === 'Cash on Delivery'}
              onChange={handlePaymentMethodChange}
              className="mr-2"
            />
            <label>Cash on Delivery</label>
          </div>
          {form.paymentMethod === 'e-Money' && (
              <div className="flex">
                <input
                  type="text"
                  name="emoneyNumber"
                  value={form.emoneyNumber}
                  onChange={handleChange}
                  placeholder="e-Money Number"
                  className="w-full p-2 border rounded mr-2"
                />
                <input
                  type="text"
                  name="emoneyPin"
                  value={form.emoneyPin}
                  onChange={handleChange}
                  placeholder="e-Money Pin"
                  className="w-full p-2 border rounded"
                />
              </div>
            )}
        </div>
      </div>

      <div className="w-1/3">
        <div className="bg-gray-100 p-6 rounded">
          <h3 className="text-xl font-bold mb-4">Summary</h3>
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between mb-2">
              <span>{item.name} (x{item.quantity})</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between mt-6 mb-2">
            <span className="font-bold">Total</span>
            <span className="font-bold">${summary.total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>${summary.shipping}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>VAT (Included)</span>
            <span>${summary.vat.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-6">
            <span className="font-bold text-xl">Grand Total</span>
            <span className="font-bold text-xl">${summary.grandTotal.toFixed(2)}</span>
          </div>
          <button
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded mt-6"
          onClick={handleSubmit}
        >
          Continue
        </button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Payment Status</h2>
            <p className="text-xl mb-4">{popupMessage}</p>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
              onClick={handlePopupClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
