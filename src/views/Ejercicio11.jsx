import React, { useState, useEffect } from "react";

const apiKey = "f2fe25f4db364a9d90d07816d9b8589b";

const Ejercicio11 = () => {
  const [categorias, setCategorias] = useState([]);
  const [CategoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener categorías");
        }
        const data = await response.json();
        const categorias = data.sources.map((source) => ({
          value: source.id,
          label: source.name,
        }));
        setCategorias(categorias);
        setCategoriaSeleccionada(categorias[0].value);
      } catch (error) {
        console.error("Error al obtener categorías:", error);
      }
    };

    fetchCategorias();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        if (!CategoriaSeleccionada) return;
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?sources=${CategoriaSeleccionada}&apiKey=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener noticias");
        }
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false); // Cuando se cargan los artículos, establecer loading en false
      } catch (error) {
        console.error("Error al obtener noticias:", error);
        setLoading(false); // Manejar error estableciendo loading en false
      }
    };

    fetchNews();
  }, [CategoriaSeleccionada]);

  const handleCategoriaChange = (categoria) => {
    setCategoriaSeleccionada(categoria);
    setLoading(true); // Al cambiar la categoría, establecer loading en true
  };

  return (
    <section className="container">
      <article className="my-4">
        <h1 className="text-center">Noticias</h1>
      </article>
      <article className="my-4">
        <label htmlFor="categoriaSelect" className="form-label">
          Selecciona una categoría:
        </label>
        <select
          id="categoriaSelect"
          className="form-select"
          onChange={(e) => handleCategoriaChange(e.target.value)}
        >
          {categorias.map((categoria, index) => (
            <option key={index} value={categoria.value}>
              {categoria.label}
            </option>
          ))}
        </select>
      </article>
      <article className="row row-cols-1 row-cols-md-3 g-4">
        {loading ? ( // Mostrar esqueleto mientras se carga
          <>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          articles.map((article, index) => (
            <div key={index} className="col">
              <div className="card h-100">
                <img
                  src={article.urlToImage}
                  className="card-img-top"
                  alt={article.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                </div>
                <div className="card-footer">
                  <a href={article.url} className="btn btn-primary">
                    Leer más
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </article>
    </section>
  );
};

export default Ejercicio11;
