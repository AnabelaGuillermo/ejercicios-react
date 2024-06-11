
import React, { useState } from 'react'
import Ejercicio4 from './pages/Ejercicio4'
import './App.css'

function App() {
  const [showEjercicio4, setShowEjercicio4] = useState(false);

  const handleButtonClick = () => {
    setShowEjercicio4(!showEjercicio4);
  }

  return (
    <section className="seccion-ejercicio4">
      <article className="contenido-4">
        <h1>Ejercicios React</h1>
        <button onClick={handleButtonClick}>
          {showEjercicio4 ? 'Ocultar Ejercicio 4' : 'Mostrar Ejercicio 4'}
        </button>
        {showEjercicio4 && <Ejercicio4 />}
      </article>
    </section>

  );
}

export default App;
