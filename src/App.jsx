import { useState } from 'react'
import './App.css'
import Ejercicio1 from './pages/Ejercicio1'

function App() {
  const [showEjercicio1, setShowEjercicio1] = useState(false);

  const handleButtonClick = () => {
    setShowEjercicio1(!showEjercicio1);
  }

  return (
    <>
      <section>
        <h1>Ejercicios React</h1>
        <button onClick={handleButtonClick}>
          {showEjercicio1 ? 'Ocultar Ejercicio 1' : 'Mostrar Ejercicio 1'}
        </button>
        {showEjercicio1 && <Ejercicio1 />}
      </section>
    </>
  );
}

export default App
