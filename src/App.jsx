import React, { useState } from 'react';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import CreateProduct from './components/CreateProduct.jsx';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [showCreateProduct, setShowCreateProduct] = useState(false);

  const toggleForm = () => setShowLogin(!showLogin);
  const toggleCreateProduct = () => setShowCreateProduct(!showCreateProduct);

  return (
    <div className="App">
      <Header />
      <div className="form-container">
        {showCreateProduct ? (
          <CreateProduct />
        ) : (
          showLogin ? (
            <LoginForm onToggle={toggleForm} />
          ) : (
            <RegisterForm onToggle={toggleForm} />
          )
        )}
        <button onClick={toggleCreateProduct}>
          {showCreateProduct ? 'Volver a Inicio de Sesión' : 'Crear Producto'}
        </button>
      </div>
    </div>
  );
}

export default App;
