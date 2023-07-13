import React, { useState } from 'react';
import './AddEquipment.css';

function AddEquipment({ onAddEquipment }) {
  const [equipment, setEquipment] = useState({
    name: '',
    acquisitionDate: '',
    model: '',
    brand: '',
    serialNumber: '',
    department: '',
    status: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'acquisitionDate') {
      // Validar y limitar el formato de la fecha de adquisición (16/02/2023)
      const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
      if (!dateRegex.test(value)) {
        return; // No se actualiza el estado si el formato es incorrecto
      }
    }
    setEquipment((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddEquipment(equipment);
    setEquipment({
      name: '',
      acquisitionDate: '',
      model: '',
      brand: '',
      serialNumber: '',
      department: '',
      status: ''
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Tipo:
          <input type="text" name="name" value={equipment.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Fecha de adquisición (Formato: DD/MM/YYYY):
          <input
            type="text"
            name="acquisitionDate"
            placeholder="Texto por defecto"
            value={equipment.acquisitionDate}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Modelo:
          <input type="text" name="model" value={equipment.model} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Marca:
          <input type="text" name="brand" value={equipment.brand} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Número de serie:
          <input
            type="text"
            name="serialNumber"
            value={equipment.serialNumber}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Departamento:
          <input
            type="text"
            name="department"
            value={equipment.department}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Estado (nuevo, usado, defectuoso):
          <input type="text" name="status" value={equipment.status} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default AddEquipment;
