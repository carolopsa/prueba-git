// Header.jsx
import React from 'react';
import '../App.css'; // Asegúrate de importar el archivo CSS

const Header = () => {
  return (
    <header className="header">
      <h2 className="logo">Olga Ávila</h2>
      <nav className="navegacion">
        <a href="#">Inicio</a>
        <a href="#">Ingresar productos</a>
        <a href="#">Descargar productos</a>
        <a href="#">Orden pedido</a>
        <a href="#">Factura</a>
        <button className="btn">Iniciar Sesión</button>
      </nav>
    </header>
  );
};

export default Header;
