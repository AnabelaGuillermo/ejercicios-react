import React, { useState, useEffect } from "react";
import "../Ejercicio6.css";

function Ejercicio6() {
  const [color, setColor] = useState("");
  const [coloresGuardados, setColoresGuardados] = useState([]);

  useEffect(() => {
    const coloresGuardadosString = localStorage.getItem("coloresGuardados");
    if (coloresGuardadosString) {
      setColoresGuardados(JSON.parse(coloresGuardadosString));
    }
  }, []);

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const coloresActualizados = [...coloresGuardados, color];
    setColoresGuardados(coloresActualizados);
    localStorage.setItem(
      "coloresGuardados",
      JSON.stringify(coloresActualizados)
    );
    setColor("");
  };

  const handleDelete = (index) => {
    const coloresActualizados = coloresGuardados.filter((_, i) => i !== index);
    setColoresGuardados(coloresActualizados);
    localStorage.setItem(
      "coloresGuardados",
      JSON.stringify(coloresActualizados)
    );
  };

  return (
    <section className="seccion-colores">
      <h2>Guardar Color en LocalStorage</h2>
      <form onSubmit={handleSubmit}>
        <input type="color" value={color} onChange={handleChange} />
        <button type="submit">Guardar Color</button>
      </form>
      <article className="article-map">
        {coloresGuardados.map((colorGuardado, index) => (
          <div key={index} className="card-container">
            <div
              className="color-card"
              style={{ backgroundColor: colorGuardado }}
            >
              <button
                onClick={() => handleDelete(index)}
                className="boton-eliminar"
              >
                &times;
              </button>
            </div>
            <div className="toUpper-coloresGuardados">
              {colorGuardado.toUpperCase()}
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Ejercicio6;
