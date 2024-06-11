import React, { useState } from 'react';
import Ejercicio2 from './Ejercicio2';

const Ejercicio3 = () => {
  const [msj, setMsj] = useState('My friend');

  const handleClick = () => {
    setMsj('My friend (from changed state)');
  };

  return (
    <div>
      <Ejercicio2 name={msj} />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Ejercicio3
