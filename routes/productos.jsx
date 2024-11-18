const express = require('express');
const router = express.Router();
const connection = require('../config/db'); // Importa la conexión a la base de datos

// Endpoint para crear un nuevo producto
router.post('/api/productos', (req, res) => {
    const { nombre, precio, descripcion, categoria, stock } = req.body;
    const query = 'INSERT INTO productos (nombre, precio, descripcion, categoria, stock) VALUES (?, ?, ?, ?, ?)';

    connection.query(query, [nombre, precio, descripcion, categoria, stock], (err, result) => {
        if (err) {
            return res.status(500).json({ mensaje: 'Error al crear el producto', error: err });
        }
        res.status(201).json({ mensaje: 'Producto creado exitosamente', productoId: result.insertId });
    });
});

module.exports = router;
