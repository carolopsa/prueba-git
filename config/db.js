const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',         // El host del servidor MySQL
    user: 'tu_usuario',         // Tu usuario de MySQL
    password: 'tu_contraseña',  // La contraseña de tu usuario de MySQL
    database: 'producto'          // La base de datos que creaste para productos
});

// Conectar a la base de datos y verificar la conexión
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

// Exporta la conexión para que pueda ser usada en otros archivos
module.exports = connection;
