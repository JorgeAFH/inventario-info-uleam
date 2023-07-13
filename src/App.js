import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Menu from './Menu';
import SearchEquipment from './SearchEquipment';
import AddEquipment from './AddEquipment';
import LifeTime from './LifeTime';
import './App.css'; // Importar el archivo CSS

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('login');

  const handleLogin = () => {
    setLoggedIn(true);
    setCurrentPage('menu');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setCurrentPage('login');
  };

  const renderHeader = () => {
    if (loggedIn) {
      return (
        <header className="app-header"> {/* Aplicar la clase CSS */}
          <nav>
            <button className="logout-button" onClick={handleLogout}>Cerrar sesión</button> {/* Aplicar estilos personalizados */}
            <button onClick={() => setCurrentPage('menu')}>Menú</button>
            <button onClick={() => setCurrentPage('searchEquipment')}>Búsqueda de equipo</button>
            <button onClick={() => setCurrentPage('addEquipment')}>Ingresar equipo</button>
            <button onClick={() => setCurrentPage('LifeTime')}>Vida útil de equipo</button>
          </nav>
        </header>
      );
    } else {
      return null;
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login handleLogin={handleLogin} setCurrentPage={setCurrentPage} />;
      case 'register':
        return <Register setCurrentPage={setCurrentPage} />;
      case 'menu':
        return <Menu />;
      case 'searchEquipment':
        return <SearchEquipment />;
      case 'addEquipment':
        return <AddEquipment />;
      case 'LifeTime':
        return <LifeTime />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderHeader()}
      {renderPage()}
    </div>
  );
}

export default App;
