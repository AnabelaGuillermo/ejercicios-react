import React, { useState } from 'react';
import Ejercicio1 from './components/Ejercicio1';
import Ejercicio2 from './components/Ejercicio2';
import Ejercicio3 from './components/Ejercicio3';
import Ejercicio4 from './components/Ejercicio4';
import Ejercicio5 from './components/Ejercicio5';
import Ejercicio7 from './components/Ejercicio7';
import Ejercicio8 from './components/Ejercicio8';
import './App.css';

function App() {
  const [showEjercicio1, setShowEjercicio1] = useState(false);
  const [showEjercicio2, setShowEjercicio2] = useState(false);
  const [showEjercicio3, setShowEjercicio3] = useState(false);
  const [showEjercicio4, setShowEjercicio4] = useState(false); 
  const [showEjercicio5, setShowEjercicio5] = useState(false); 
  const [showEjercicio7, setShowEjercicio7] = useState(false); 
  const [showEjercicio8, setShowEjercicio8] = useState(false); 

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

  const handleButtonClick5 = () => {
    setShowEjercicio5(!showEjercicio5);
  };

  const handleButtonClick7 = () => {
    setShowEjercicio7(!showEjercicio7);
  };

  const handleButtonClick8 = () => {
    setShowEjercicio8(!showEjercicio8);
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
        <div>
          <button onClick={handleButtonClick5}>
            {showEjercicio5 ? 'Ocultar Ejercicio 5' : 'Mostrar Ejercicio 5'}
          </button>
          {showEjercicio5 && <Ejercicio5 />}
        </div>
        <div>
          <button onClick={handleButtonClick7}>
            {showEjercicio7 ? 'Ocultar Ejercicio 7' : 'Mostrar Ejercicio 7'}
          </button>
          {showEjercicio7 && <Ejercicio7 />}
        </div>
        <div>
          <button onClick={handleButtonClick8}>
            {showEjercicio8 ? 'Ocultar Ejercicio 8' : 'Mostrar Ejercicio 8'}
          </button>
          {showEjercicio8 && <Ejercicio8 />}
        </div>
      </article>
    </section>
  );
}

export default App;
