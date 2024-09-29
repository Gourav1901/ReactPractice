import { useState } from 'react';

function useToggleItems(initialItems, initialPosition = 0) {
  // Ensure the initial position is within the valid range of the array
  const [currentIndex, setCurrentIndex] = useState(initialPosition % initialItems.length);

  // Toggle the state to the next item in the array
  const toggleState = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % initialItems.length);
  };

  // Return the current item and the function to toggle the state
  return [initialItems[currentIndex], toggleState];
}

export default useToggleItems;
