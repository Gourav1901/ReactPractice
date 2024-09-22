// CoffeeGrid.js
import React from 'react';
import { useSelector } from 'react-redux';

const CoffeeGrid = () => {
  const coffeeList = useSelector((state) => state.coffeeList);

  return (
    <div className="coffee-grid">
      {coffeeList.map((coffee) => (
        <div key={coffee.id} className="coffee-item">
          <h3>{coffee.title}</h3>
          <p>{coffee.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CoffeeGrid;
