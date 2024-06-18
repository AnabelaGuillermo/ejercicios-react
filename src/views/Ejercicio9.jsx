import React, { useState, useEffect } from 'react';
import '../Ejercicio9.css';

const Ejercicio9 = () => {
    const [citas, setCitas] = useState([]);
    const [nuevaCita, setNuevaCita] = useState({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    });
  
    const generarHoras = () => {
      const horas = [];
      for (let i = 9; i <= 20; i++) {
        const hora = `${i.toString().padStart(2, '0')}:00`;
        horas.push(hora);
      }
      return horas;
    };
  
    const [horasDisponibles] = useState(generarHoras());
  
    useEffect(() => {
      const citasGuardadas = JSON.parse(localStorage.getItem('citas'));
      if (citasGuardadas) {
        setCitas(citasGuardadas);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('citas', JSON.stringify(citas));
    }, [citas]);
  
    const handleChange = e => {
      setNuevaCita({
        ...nuevaCita,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      for (const key in nuevaCita) {
        if (nuevaCita[key] === '') {
          alert('Todos los campos son obligatorios');
          return;
        }
      }

      const hoy = new Date();
      const fechaCita = new Date(nuevaCita.fecha);
      if (fechaCita < hoy) {
        alert('La fecha de la cita no puede ser anterior a hoy');
        return;
      }

      const nuevaCitaConId = { ...nuevaCita, id: Date.now() };
      setCitas([...citas, nuevaCitaConId]);
      setNuevaCita({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
      });
    };
  
    const eliminarCita = id => {
      const nuevasCitas = citas.filter(cita => cita.id !== id);
      setCitas(nuevasCitas);
    };
  
    return (
      <section className="seccion-Ejercicio9">
        <h1>Administrador de Citas</h1>
        <article className="formulario">
          <form onSubmit={handleSubmit}>
            <label>Nombre Mascota</label>
            <input
              type="text"
              name="mascota"
              value={nuevaCita.mascota}
              onChange={handleChange}
              required
            />
            <label>Nombre del Propietario</label>
            <input
              type="text"
              name="propietario"
              value={nuevaCita.propietario}
              onChange={handleChange}
              required
            />
            <label>Fecha</label>
            <input
              type="date"
              name="fecha"
              value={nuevaCita.fecha}
              min={new Date().toISOString().split('T')[0]} // No permitir fechas anteriores a hoy
              onChange={handleChange}
              required
            />
            <label>Hora</label>
            <select
              name="hora"
              value={nuevaCita.hora}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una hora</option>
              {horasDisponibles.map(hora => (
                <option key={hora} value={hora}>{hora}</option>
              ))}
            </select>
            <label>Síntomas</label>
            <textarea
              name="sintomas"
              value={nuevaCita.sintomas}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Agregar Cita</button>
          </form>
        </article>
        <article className="citas">
          <h2>Administra tus citas</h2>
          {citas.length === 0 ? (
            <p>No hay citas</p>
          ) : (
            citas.map(cita => (
              <div key={cita.id} className="cita">
                <p>
                  <span>Nombre Mascota:</span> {cita.mascota}
                </p>
                <p>
                  <span>Propietario:</span> {cita.propietario}
                </p>
                <p>
                  <span>Fecha:</span> {cita.fecha}
                </p>
                <p>
                  <span>Hora:</span> {cita.hora}
                </p>
                <p>
                  <span>Síntomas:</span> {cita.sintomas}
                </p>
                <button onClick={() => eliminarCita(cita.id)}>Eliminar</button>
              </div>
            ))
          )}
        </article>
      </section>
    );
  };
  
  export default Ejercicio9;