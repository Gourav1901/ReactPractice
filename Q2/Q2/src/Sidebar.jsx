// Sidebar.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchCoffee, setSortOrder } from './actions';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleSort = (sortOrder) => {
    dispatch(setSortOrder(sortOrder));
    dispatch(fetchCoffee(sortOrder));
  };

  return (
    <div className="sidebar">
      <h3>Sort Coffee</h3>
      <button onClick={() => handleSort('asc')}>Sort by Ascending</button>
      <button onClick={() => handleSort('desc')}>Sort by Descending</button>
    </div>
  );
};

export default Sidebar;
