import React, { useState } from 'react';
import Login from './Login';
import './Register.css';


function Register() {
  const [user, setUser] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [registered, setRegistered] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulando registro exitoso
    // Aquí puedes agregar la lógica para guardar los datos en tu base de datos

    // Restablecer los campos del formulario
    setUser({
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });

    // Mostrar el aviso de registro exitoso y redirigir al usuario a la interfaz de inicio de sesión
    setRegistered(true);
  };

  if (registered) {
    return (
      <div>
        <h2>Registro exitoso</h2>
        <p>¡Tu cuenta ha sido creada correctamente!</p>
        <Login />
      </div>
    );
  }

  
  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div className="register-container">
      <input
        type="text"
        name="username"
        placeholder="Nombre de usuario"
        value={user.username}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="firstName"
        placeholder="Nombre"
        value={user.firstName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Apellido"
        value={user.lastName}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={user.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={user.password}
        onChange={handleInputChange}
      />
      <button type="submit">Registrar</button>
      </div>
    </form>
  );
}

export default Register;

