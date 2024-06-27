import React, { useState } from 'react';

function Ejercicio13() {
  const [location, setLocation] = useState('');
  const [country, setCountry] = useState('');
  const [weather, setWeather] = useState({});
  const [error, setError] = useState('');

  const apiKey = import.meta.env.VITE_API_KEY_EJERCICIO_13;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setWeather({});

    if (!location || !country) {
      setError('Por favor, ingresa una ubicación y un país.');
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location},${country}&appid=${apiKey}`
      );
      const data = await response.json();

      if (data.cod === '404') {
        setError('No se encontraron datos de la ciudad ingresada.');
      } else {
        setWeather({
          name: data.name,
          temp: Math.round(data.main.temp - 273.15),
          description: data.weather[0].description,
        });
      }
    } catch (err) {
      setError('Error al consultar la API.');
    }
  };

  return (
    <section className="App">
      <h1>Consulta el Clima</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ubicación"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="País"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button type="submit">Consultar</button>
      </form>
      {error && <p>{error}</p>}
      {weather.name && (
        <div>
          <h2>Clima en {weather.name}</h2>
          <p>Temperatura: {weather.temp}°C</p>
          <p>Condiciones: {weather.description}</p>
        </div>
      )}
    </section>
  );
}

export default Ejercicio13;
