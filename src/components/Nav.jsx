import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../utils/Context';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [products] = useContext(ProductContext);
  const [categoryColors, setCategoryColors] = useState({});

  // Get distinct categories
  let distinct_category = products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  // Function to generate random RGBA color
  const color = () => {
    const randomInt = () => Math.floor(Math.random() * 256); // Random integer between 0 and 255
    const randomAlpha = () => (Math.random() * 0.7 + 0.3).toFixed(2); // Random alpha between 0.3 and 1.0

    return `rgba(${randomInt()}, ${randomInt()}, ${randomInt()}, ${randomAlpha()})`;
  };

  // Function to initialize colors only once
  const initializeColors = () => {
    const newColors = distinct_category.reduce((acc, category) => {
      acc[category] = color(); // Generate a color for each category
      return acc;
    }, {});
    setCategoryColors(newColors); // Store the colors in state
  };

  // UseEffect to run the color initialization only once when the component mounts
  useEffect(() => {
    initializeColors();
  }, []); // Empty dependency array ensures this only runs once on mount

  return (
    <nav className='w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5'>
     
        <Link to='/create' className='py-2 px-5 border rounded border-blue-200 text-blue-300'>Add New Product</Link>
      <hr className='my-3 w-[80%]' />
      <h1 className='text-2xl mb-3 w-[80%]'>Category Filter</h1>
      {distinct_category.map((category, index) => (
        <div key={index} className='w-[80%]'>
          <Link  
            to={`/?category=${category}`} 
            className='flex items-center mb-3'
          >
            <span 
              style={{ backgroundColor: categoryColors[category] }} 
              className='rounded-full mr-2 w-[15px] h-[15px]'
            ></span>{" "}
            {category}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Nav;
