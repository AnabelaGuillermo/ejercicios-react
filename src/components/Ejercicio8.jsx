import React, { useState } from 'react';

function Ejercicio8() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, apellido, dni, email } = formData;

    // Expresiones regulares para validación
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validación de longitud mínima y máxima
    const minNombreLength = 2;
    const maxNombreLength = 30;
    const minApellidoLength = 2;
    const maxApellidoLength = 30;

    // Validación de los campos
    if (
      nombre.length < minNombreLength ||
      nombre.length > maxNombreLength ||
      apellido.length < minApellidoLength ||
      apellido.length > maxApellidoLength ||
      !emailRegex.test(email)
    ) {
      alert('Por favor, completa correctamente todos los campos.');
    } else if (dni.length !== 8) {
      alert('El DNI debe contener exactamente 8 números.');
    } else {
      alert('Datos enviados');
    }
  };

  return (
    <>
    <section className='container formulario-simple'>
    <h2>Formulario</h2>
    <hr></hr>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          minLength="2"
          maxLength="30"
          required
        />
      </div>
      <div>
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          minLength="2"
          maxLength="30"
          required
        />
      </div>
      <div>
        <label htmlFor="dni">DNI:</label>
        <input
          type="text"
          id="dni"
          name="dni"
          value={formData.dni}
          onChange={handleChange}
          pattern="[0-9]{8}"
          maxLength="8"
          required
          title="El DNI debe contener exactamente 8 números."
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="boton-enviar mt-2">
        Enviar
      </button>
    </form>
    </section>
    </>
  );
}

export default Ejercicio8;
