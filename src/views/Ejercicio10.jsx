import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../Ejercicio10.css";

const Ejercicio10 = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [peliculas, setPeliculas] = useState(() => {
    const peliculasGuardadas = localStorage.getItem("peliculas");
    return peliculasGuardadas ? JSON.parse(peliculasGuardadas) : [];
  });

  const handleNombreChange = (event) => {
    if (event.target.value.length > 20) {
      event.target.value = event.target.value.slice(0, 20);
    }
  };

  const handleDescripcionChange = (event) => {
    if (event.target.value.length > 50) {
      event.target.value = event.target.value.slice(0, 50);
    }
  };

  const onSubmit = (data) => {
    const nuevaPelicula = [...peliculas, data];
    setPeliculas(nuevaPelicula);
    localStorage.setItem("peliculas", JSON.stringify(nuevaPelicula));
    reset();
  };

  return (
    <div>
      <h1>Agregar Película</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            {...register("nombre", {
              required: "Completa este campo",
              maxLength: {
                value: 20,
              },
            })}
            onChange={handleNombreChange}
          />
          {errors.nombre && (
            <p className="error-message">{errors.nombre.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            {...register("descripcion", {
              required: "Completa este campo",
              maxLength: {
                value: 50,
              },
            })}
            onChange={handleDescripcionChange}
          ></textarea>
          {errors.descripcion && (
            <p className="error-message">{errors.descripcion.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="genero">Género:</label>
          <select
            id="genero"
            {...register("genero", { required: "Selecciona un género" })}
          >
            <option value="">Selecciona...</option>
            <option value="Comedia">Comedia</option>
            <option value="Drama">Drama</option>
            <option value="Infantil">Infantil</option>
          </select>
          {errors.genero && (
            <p className="error-message">{errors.genero.message}</p>
          )}
        </div>
        <button type="submit">Enviar</button>
      </form>
      <h2>Películas Guardadas</h2>
      <div>
        {peliculas.length === 0 ? (
          <p className="mt-3">Aún no se agregaron películas.</p>
        ) : (
          peliculas.map((pelicula, index) => (
            <div key={index} className="card-style">
              <h3>{pelicula.nombre}</h3>
              <p>{pelicula.descripcion}</p>
              <p>
                <b>Género:</b> {pelicula.genero}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Ejercicio10;
