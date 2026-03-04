//Alan Alberto Colli Ake
import express from 'express';

const app = express();
const port = 3000;

// GET
app.get('/', (req, res) => {
    res.status(200).send("<p> Hola Mundo </p>");
});

// POST
app.post('/registro', (req, res) => {
    res.status(201).send("<p> Registro Exitoso </p>");
});

// PUT
app.put('/usuario/actualizar', (req, res) => {
    res.status(200).send("<p> Actualizacion Exitosa </p>");
});

// PATCH
app.patch('/usuario/modificar', (req, res) => {
    res.status(200).send("<p> Modificacion Exitosa </p>");
});

// DELETE
app.delete('/usuario/eliminar', (req, res) => {
    res.status(200).send("<p> Eliminacion Exitosa </p>");
});

app.listen(port, () => {
    console.log('Server is Running on port 3000');
});
