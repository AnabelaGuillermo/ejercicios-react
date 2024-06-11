import React from 'react'
import Ejercicio1 from './Ejercicio1';

const Ejercicio2 = (props) => {
    return (
      <section>
        <Ejercicio1 name={props.name} />
      </section>
    );
  };

export default Ejercicio2
