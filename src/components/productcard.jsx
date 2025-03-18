
// cart/productcard.jsx
import React from "react";
import ViewProductButton from "../components/button";

const Productcard = () => {
  const productImage = "https://via.placeholder.com/150";
  const productName = "Sample Product";
  const productPrice = "$49.99";

  return (
    <div className="border p-4 rounded shadow-lg w-64 text-center">
      <img src={productImage} alt={productName} className="w-full h-40 object-cover mb-4 rounded" />
      <h2 className="text-lg font-semibold mb-2">{productName}</h2>
      <p className="text-gray-600 mb-4">{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;
