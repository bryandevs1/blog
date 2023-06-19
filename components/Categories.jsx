import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (

    <div className="card aside-card">

    <h3 className="headline headline-2 aside-title">
      <span className="span">Categories</span>
    </h3>

    <ul className="comment-list">
      <li>

      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3 border-gray-700 hover:text-blue-600 hover:cursor-pointer`}>{category.name}</span>
        </Link>
      ))}

      </li>

    </ul>

  </div>
  );
};

export default Categories;
