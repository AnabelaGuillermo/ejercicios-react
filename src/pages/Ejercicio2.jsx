import React from 'react'
import Ejercicio1 from './Ejercicio1';

/* Modificar el componente anterior y enviar mediante props el valor “My friend” */

const Ejercicio2 = () => {
    return (
      <section>
        <Ejercicio1 name="My friend" />
      </section>
    );
  };

export default Ejercicio2