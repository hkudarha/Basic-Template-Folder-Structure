import React from "react";
import { useParams } from "react-router-dom";

const productDB = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 1499,
    image: "https://images.unsplash.com/photo-1585386959984-a41552231648",
    description:
      "Premium wireless headphones with crystal clear sound, deep bass, and 20-hour battery life."
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 2499,
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
    description:
      "Feature-rich smart watch with health tracking and notification sync."
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = productDB.find((p) => p.id === Number(id));

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      {/* Image */}
      <div className="w-full rounded-xl overflow-hidden shadow-md">
        <img src={product.image} className="w-full object-cover" />
      </div>

      {/* Info */}
      <div>
        <h1 className="text-3xl font-bold">{product.title}</h1>

        <p className="text-gray-600 text-lg mt-4">{product.description}</p>

        <div className="text-4xl font-bold text-blue-600 mt-6">
          ₹{product.price}
        </div>

        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
