import React, { useState } from 'react';
import './App.css';
import Ejercicio2 from './pages/Ejercicio2';

function App() {
  const [showEjercicio2, setShowEjercicio1] = useState(false);

  const handleButtonClick = () => {
    setShowEjercicio1(!showEjercicio2);
  }

  return (
    <>
      <section>
        <h1>Ejercicios React</h1>
        <button onClick={handleButtonClick}>
          {showEjercicio2 ? 'Ocultar Ejercicio 2' : 'Mostrar Ejercicio 2'}
        </button>
        {showEjercicio2 && <Ejercicio2 />}
      </section>
    </>
  );
}

export default App;
