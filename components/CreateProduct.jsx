import React, { useState } from 'react';
import '../App.css';

function CreateProduct() {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            name: productName,
            description: productDescription,
            price: parseFloat(productPrice), // Asegurarse de que el precio sea un número
        };
        console.log('Producto creado:', newProduct);
        // Aquí puedes hacer la petición al backend para guardar el producto
    };

    return (
        <div className="create-product">
            <h2>Crear Producto</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre del Producto"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Descripción"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Precio"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    step="0.01" // Permitir decimales en el precio
                    required
                />
                <button type="submit">Crear Producto</button>
            </form>
        </div>
    );
}

export default CreateProduct;
