import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 1499,
    image: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "High-quality wireless headphones with long-lasting battery."
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 2499,
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
    description: "Track health, steps and notifications easily."
  },
];

const ProductList = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductList;
