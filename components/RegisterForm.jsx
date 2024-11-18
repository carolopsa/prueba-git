import React from 'react';

const RegisterForm = ({ onToggle }) => (
  <div className="form">
    <h2>Registrarse</h2>
    <form>
      <input type="text" placeholder="Nombre de Usuario" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Contraseña" required />
      <button type="submit">Registrarse</button>
      <p>¿Tienes una cuenta? <span onClick={onToggle}>Inicia sesión</span></p>
    </form>
  </div>
);

export default RegisterForm;
