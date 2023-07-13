import React, { useState } from 'react';
import './Login.css'; // Importar el archivo CSS

function Login({ handleLogin, setCurrentPage }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const registeredUser = JSON.parse(localStorage.getItem('userData'));

    if (
      username === registeredUser.username &&
      password === registeredUser.password
    ) {
      handleLogin();
    } else {
      console.log('Credenciales incorrectas');
    }
  };

  const handleRegisterClick = () => {
    setCurrentPage('register');
  };

  return (
    <div className="login-container"> {/* Aplicar la clase CSS al contenedor */}
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Usuario:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Iniciar sesión</button>
      </form>
      <p>
        ¿No tienes una cuenta aún?{' '}
        <button onClick={handleRegisterClick}>Regístrate</button>
      </p>
    </div>
  );
}

export default Login;
