import React, { useState } from 'react';
import Ejercicio1 from './components/Ejercicio1';
import Ejercicio2 from './components/Ejercicio2';
import Ejercicio3 from './components/Ejercicio3';
import Ejercicio4 from './components/Ejercicio4';
import './App.css';

function App() {
  const [showEjercicio1, setShowEjercicio1] = useState(false);
  const [showEjercicio2, setShowEjercicio2] = useState(false);
  const [showEjercicio3, setShowEjercicio3] = useState(false);
  const [showEjercicio4, setShowEjercicio4] = useState(false);

  const handleButtonClick1 = () => {
    setShowEjercicio1(!showEjercicio1);
  };

  const handleButtonClick2 = () => {
    setShowEjercicio2(!showEjercicio2);
  };

  const handleButtonClick3 = () => {
    setShowEjercicio3(!showEjercicio3);
  };

  const handleButtonClick4 = () => {
    setShowEjercicio4(!showEjercicio4);
  };

  return (
    <section className="seccion-ejercicio4">
      <article className="contenido-4">
        <h1>Ejercicios React</h1>
        <div>
          <button onClick={handleButtonClick1}>
            {showEjercicio1 ? 'Ocultar Ejercicio 1' : 'Mostrar Ejercicio 1'}
          </button>
          {showEjercicio1 && <Ejercicio1 name="world" />}
        </div>
        <div>
          <button onClick={handleButtonClick2}>
            {showEjercicio2 ? 'Ocultar Ejercicio 2' : 'Mostrar Ejercicio 2'}
          </button>
          {showEjercicio2 && <Ejercicio2 name="my friend" />}
        </div>
        <div>
          <button onClick={handleButtonClick3}>
            {showEjercicio3 ? 'Ocultar Ejercicio 3' : 'Mostrar Ejercicio 3'}
          </button>
          {showEjercicio3 && <Ejercicio3 />}
        </div>
        <div>
          <button onClick={handleButtonClick4}>
            {showEjercicio4 ? 'Ocultar Ejercicio 4' : 'Mostrar Ejercicio 4'}
          </button>
          {showEjercicio4 && <Ejercicio4 />}
        </div>
      </article>
    </section>
  );
}

export default App;
