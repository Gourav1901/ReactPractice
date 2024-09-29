import React from 'react';
import useToggleItems from './useToggleItems';

function App() {
  // Use the custom hook with an initial array and initial position
  const [state, toggleState] = useToggleItems(['A', 'B', 'C'], 1);

  return (
    <div className="App">
      <h1>Current Item: {state}</h1>
      <button onClick={toggleState}>Toggle Item</button>
    </div>
  );
}

export default App;
