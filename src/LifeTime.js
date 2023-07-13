import React, { useState } from 'react';
import './LifeTime.css';

function SearchEquipment() {
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

  const calculateYearsSinceAcquisition = (acquisitionDate) => {
    const currentYear = new Date().getFullYear();
    const acquisitionYear = new Date(acquisitionDate).getFullYear();
    const yearsSinceAcquisition = currentYear - acquisitionYear;
    return yearsSinceAcquisition > 0 ? yearsSinceAcquisition : 0;
  };

  return (
    <div>
      <div className="front-container">
      <div className="search-container">
      <h1>Búsqueda Vida util</h1>
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
            <th>Tiempo adquirido (años)</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((result, index) => (
            <tr key={index}>
              <td>{result.name}</td>
              <td>{result.acquisitionDate}</td>
              <td>{calculateYearsSinceAcquisition(result.acquisitionDate)}</td>
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

export default SearchEquipment;
