import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  function handleClick() {
    setNumber(number + 1);
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Số hiện tại: {number}</h1>
      <button 
        onClick={handleClick}
        style={{ 
          padding: '10px 20px', 
          fontSize: '18px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Bấm để tăng
      </button>
    </div>
  );
}

export default Counter;