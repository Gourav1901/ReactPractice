// App.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CoffeeGrid from './CoffeeGrid';
import Sidebar from './Sidebar';
import { fetchCoffee } from './actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoffee()); // Fetch coffee data on initial load
  }, [dispatch]);

  return (
    <div className="app">
      <Sidebar />
      <CoffeeGrid />
    </div>
  );
};

export default App;
