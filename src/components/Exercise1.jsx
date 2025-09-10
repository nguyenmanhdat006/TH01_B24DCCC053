import { useState } from 'react';

const Exercise1 = () => {
  const [number, setNumber] = useState(0);

  const increaseNumber = () => {
    setNumber(number + 1);
  };

  const decreaseNumber = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h2>Current Number: {number}</h2>
      <button onClick={increaseNumber}>Increase</button>
      <button onClick={decreaseNumber}>Decrease</button>
    </div>
  );
};

export default Exercise1;
