import React, { useState } from 'react';
import './SearchEquipment.css';

function LifeTime() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Realizar la lógica de búsqueda aquí
    const equipmentList = JSON.parse(localStorage.getItem('equipmentList')) || [];
    const results = equipmentList.filter((equipment) =>
      equipment.name.toLowerCase().includes(searchQuery.toLowerCase())
      || equipment.acquisitionDate.toLowerCase().includes(searchQuery.toLowerCase())
      || equipment.model.toLowerCase().includes(searchQuery.toLowerCase())
      || equipment.brand.toLowerCase().includes(searchQuery.toLowerCase())
      || equipment.serialNumber.toLowerCase().includes(searchQuery.toLowerCase())
      || equipment.department.toLowerCase().includes(searchQuery.toLowerCase())
      || equipment.status.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  
  return (
    <div className="front-container">
    <div>
      <div className="search-container">
      <h1>Búsqueda de equipo</h1>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Ingrese término de búsqueda"
        />
        <button type="submit">Buscar</button>
      </form>
      </div>
      <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Fecha de adquisición</th>
            <th>Modelo</th>
            <th>Marca</th>
            <th>Número de serie</th>
            <th>Departamento</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((result, index) => (
            <tr key={index}>
              <td>{result.name}</td>
              <td>{result.acquisitionDate}</td>
              <td>{result.model}</td>
              <td>{result.brand}</td>
              <td>{result.serialNumber}</td>
              <td>{result.department}</td>
              <td>{result.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    </div>
  );
}

export default LifeTime;
