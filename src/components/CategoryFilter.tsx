import React from 'react';
import { Category } from '../types';
import { categories } from '../data/products';
import * as Icons from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<any>;
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
  };

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onCategoryChange(null)}
          className={`px-4 py-2 rounded-full border transition-all duration-200 ${
            selectedCategory === null
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:text-blue-600'
          }`}
        >
          All Products
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.slug)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 ${
              selectedCategory === category.slug
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:text-blue-600'
            }`}
          >
            {getIcon(category.icon)}
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;