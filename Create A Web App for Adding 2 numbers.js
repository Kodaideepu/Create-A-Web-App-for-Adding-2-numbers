import React, { useState } from 'react';
import './App.css';

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const handleAdd = () => {
    const sum = parseInt(number1) + parseInt(number2);
    setResult(sum);
  };

  return (
    <div className="App">
      <h1>Add Two Numbers</h1>
      <div>
        <label htmlFor="number1">Number 1:</label>
        <input
          type="number"
          id="number1"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="number2">Number 2:</label>
        <input
          type="number"
          id="number2"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
      </div>
      <button onClick={handleAdd}>Add</button>
      <div>
        <label htmlFor="result">Result:</label>
        <input type="number" id="result" value={result} readOnly />
      </div>
    </div>
  );
}

export default App;
