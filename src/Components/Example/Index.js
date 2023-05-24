import React, { useState, useEffect } from 'react';
import Index from '../Category/Index';

function Example() {
  const categories = [
    'Action',
    'Drama',
    'Fliction',
    'Category 4',
    'Category 5',
    'Category 6',
    'Category 7',
    'Category 8'
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const storedCategories = localStorage.getItem('selectedCategories');
    if (storedCategories) {
      setSelectedCategories(JSON.parse(storedCategories));
    }
  }, []);

  const handleCategoryChange = (category) => {
    const updatedCategories = [...selectedCategories];
    const index = updatedCategories.indexOf(category);

    if (index > -1) {
      updatedCategories.splice(index, 1);
    } else {
      updatedCategories.push(category);
    }

    setSelectedCategories(updatedCategories);
    localStorage.setItem('selectedCategories', JSON.stringify(updatedCategories));
  };

  return (
    <div>
      <h1>Category Selection</h1>
      <form>
        <label>Select categories:</label>
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => handleCategoryChange(category)}
              style={{ fontWeight: selectedCategories.includes(category) ? 'bold' : 'normal' }}
            >
              {category}
            </li>
          ))}
        </ul>
      </form>
      <div>
        <h2>Selected Categories:</h2>
        {selectedCategories.length > 0 ? (
          <ul>
            {selectedCategories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        ) : (
          <p>No categories selected.</p>
        )}
      </div>
    </div>
  );
}

export default Example
