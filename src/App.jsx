import React, { useState } from 'react';
import './App.css';
import Ejercicio3 from './pages/Ejercicio3';

function App() {
  const [showEjercicio3, setShowEjercicio1] = useState(false);

  const handleButtonClick = () => {
    setShowEjercicio1(!showEjercicio3);
  }

  return (
    <>
      <section>
        <h1>Ejercicios React</h1>
        <button onClick={handleButtonClick}>
          {showEjercicio3 ? 'Ocultar Ejercicio 3' : 'Mostrar Ejercicio 3'}
        </button>
        {showEjercicio3 && <Ejercicio3 />}
      </section>
    </>
  );
}

export default App;
