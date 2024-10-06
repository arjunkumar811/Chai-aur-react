import React, { useState } from 'react';

// Define the Kumar component
function Kumar() {
  return (
    <div>
      Hello, I am Kumar!
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <h1>
      <Kumar />
    </h1>
  );
}

export default App;
