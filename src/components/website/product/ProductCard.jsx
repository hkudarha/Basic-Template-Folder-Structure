import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="block">
      <div
        className="
          bg-white border border-gray-200 rounded-xl shadow-sm 
          hover:shadow-md transition-all duration-300 
          p-4 cursor-pointer group 
          h-[390px] flex flex-col
        "
      >
        <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
          <img
            src={product.image}
            alt={product.title}
            className="
              w-full h-full object-cover 
              transition-transform duration-500 group-hover:scale-105
            "
          />
        </div>

        <div className="flex-1 mt-4">
          <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">
            {product.title}
          </h3>

          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-semibold text-gray-900">
            ₹{product.price}
          </span>

          <button
            className="
              border border-gray-300 text-gray-700 
              px-4 py-1.5 rounded-lg text-sm font-medium
              hover:bg-gray-100 transition
            "
          >
            View
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
