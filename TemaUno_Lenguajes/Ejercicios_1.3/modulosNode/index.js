const fs = require('fs'); // Importa la herramienta de sistema de archivos

fs.writeFile('Archivo.txt', 'Hola desde NodeJS soy Alan', (err) => {
    if (err) throw err;

    console.log('Archivo creado con éxito.');

    // Leer archivo después de crearlo
    fs.readFile('Archivo.txt', 'utf8', (err, data) => {
        if (err) throw err;

        console.log('Contenido del archivo:');
        console.log(data);
    });
});
