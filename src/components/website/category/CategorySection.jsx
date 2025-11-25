import React from "react";

const CategorySection = ({ title = "Categories", categories = [] }) => {
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
        {title} <span className="text-blue-600">for You</span>
      </h2>

      {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="
              group relative rounded-xl overflow-hidden
              bg-gray-200 shadow-sm 
              hover:shadow-2xl transition-all duration-500 
              cursor-pointer
              hover:-translate-y-2
            "
          >
            {/* Category Image */}
            <img
              src={cat.image}
              alt={cat.name}
              className="
                w-full h-52 object-cover 
                transition-transform duration-700 
                group-hover:scale-110
              "
            />

            {/* Gradient Mask */}
            <div
              className="
                absolute inset-0 bg-gradient-to-t 
                from-black/60 via-black/10 to-transparent
                opacity-70 group-hover:opacity-90 
                transition duration-500
              "
            />

            {/* Category Title */}
            <div
              className="
                absolute bottom-4 left-4 
                translate-y-3 group-hover:translate-y-0
                transition-all duration-500
              "
            >
              <h3 className="text-white text-xl font-semibold drop-shadow-lg">
                {cat.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default CategorySection;
