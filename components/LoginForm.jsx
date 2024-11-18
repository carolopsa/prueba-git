import React from 'react';

const LoginForm = ({ onToggle }) => (
  <div className="form">
    <h2>Iniciar Sesión</h2>
    <form>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Contraseña" required />
      <button type="submit">Iniciar Sesión</button>
      <p>¿No tienes cuenta? <span onClick={onToggle}>Regístrate</span></p>
    </form>
  </div>
);

export default LoginForm;
