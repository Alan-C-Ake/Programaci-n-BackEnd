// Alan Alberto Colli Ake 8-B
import express from 'express';
import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';

// Importe dns porque las mias estan bloqueadas
import dns from "node:dns/promises";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

const app = express();
const puerto = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conexión a la base de datos
const uri = process.env.uri; 
const client = new MongoClient(uri);
let db;
let usuariosCollection;

async function conectarBD() {
    try {
        await client.connect();
        console.log("Conexión exitosa a la base de datos");
        
        db = client.db('test'); 
        usuariosCollection = db.collection('usuarios');
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
}

conectarBD();

// Ruta de bienvenida
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API CRUD con MongoDB');
});

//Agregar usuarios (POST)
app.post('/usuarios', async (req, res) => {
    try {
        // 1. Guardamos el usuario
        const resultado = await usuariosCollection.insertOne(req.body);
        const nuevoUsuario = await usuariosCollection.findOne({ _id: resultado.insertedId });
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
});

//Obtener todos los usuarios (GET)
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await usuariosCollection.find().toArray(); 
        res.status(200).json(usuarios);
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});

//Consulta de un usuario por su ID (GET)
app.get('/usuario/:id', async (req, res) => {
    try {
        const { id } = req.params; 
        const usuario = await usuariosCollection.findOne({ _id: new ObjectId(id) }); 
        
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        
        res.status(200).json(usuario); 
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
});

//Actualizar un usuario (PUT)
app.put('/usuario/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await usuariosCollection.updateOne(
            { _id: new ObjectId(id) }, 
            { $set: req.body }
        );
        
        if (resultado.matchedCount === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        
        const usuarioActualizado = await usuariosCollection.findOne({ _id: new ObjectId(id) });
        res.status(200).json(usuarioActualizado);
        console.log(usuarioActualizado);
    } catch (error) {
        console.error("Error al actualizar:", error);
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
});

//Eliminar un usuario (DELETE)
app.delete('/usuario/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await usuariosCollection.deleteOne({ _id: new ObjectId(id) });
        
        if (resultado.deletedCount === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        
        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
        console.error("Error al eliminar:", error);
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
});

app.listen(puerto, () => {
    console.log(`Servidor Corriendo en http://localhost:${puerto}`);
});