// Alan Alberto Colli Ake - 8B

import { jest } from '@jest/globals';
import request from 'supertest';
import app from '../index.js';
import Usuario from '../models/usuario.model.js';

// Limpiar mocks entre pruebas
afterEach(() => {
    jest.restoreAllMocks();
});

// 1. POST Crear usuario
describe('POST /usuarios', () => {
    test('Debe crear un usuario correctamente', async () => {
        const usuarioMock = {
            _id: '123abc',
            nombre: 'Alan',
            edad: 21,
            correo: 'alan@gmail.com'
        };

        jest.spyOn(Usuario, 'create').mockResolvedValue(usuarioMock);

        const response = await request(app)
            .post('/usuarios')
            .send({ nombre: 'Alan', edad: 21, correo: 'alan@gmail.com' });

        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual(usuarioMock);
    });
});

// 2. GET Obtener todos
describe('GET /usuarios', () => {
    test('Debe retornar la lista de todos los usuarios', async () => {
        const usuariosMock = [
            { _id: '1', nombre: 'Alan',  edad: 21, correo: 'alan@gmail.com'  },
            { _id: '2', nombre: 'Sofia', edad: 22, correo: 'sofia@gmail.com' },
        ];

        jest.spyOn(Usuario, 'find').mockResolvedValue(usuariosMock);

        const response = await request(app).get('/usuarios');

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBe(2);
        expect(response.body).toEqual(usuariosMock);
    });
});

// 3. GET  Obtener por ID
describe('GET /usuario/:id', () => {
    test('Debe retornar un usuario por su ID', async () => {
        const usuarioMock = {
            _id: '123abc',
            nombre: 'Alan',
            edad: 21,
            correo: 'alan@gmail.com'
        };

        jest.spyOn(Usuario, 'findById').mockResolvedValue(usuarioMock);

        const response = await request(app).get('/usuario/123abc');

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(usuarioMock);
    });

    test('Debe retornar 404 si el usuario no existe', async () => {
        jest.spyOn(Usuario, 'findById').mockResolvedValue(null);

        const response = await request(app).get('/usuario/idInexistente');

        expect(response.statusCode).toBe(404);
        expect(response.body).toHaveProperty('error', 'Usuario no encontrado');
    });
});

// 4. PUT Actualizar usuario
describe('PUT /usuario/:id', () => {
    test('Debe actualizar y retornar el usuario actualizado', async () => {
        const usuarioOriginalMock    = { _id: '123abc', nombre: 'Alan',            edad: 21, correo: 'alan@gmail.com' };
        const usuarioActualizadoMock = { _id: '123abc', nombre: 'Alan Actualizado', edad: 22, correo: 'alan@gmail.com' };

        jest.spyOn(Usuario, 'findByIdAndUpdate').mockResolvedValue(usuarioOriginalMock);
        jest.spyOn(Usuario, 'findById').mockResolvedValue(usuarioActualizadoMock);

        const response = await request(app)
            .put('/usuario/123abc')
            .send({ nombre: 'Alan Actualizado', edad: 22 });

        expect(response.statusCode).toBe(200);
        expect(response.body.nombre).toBe('Alan Actualizado');
        expect(response.body.edad).toBe(22);
    });

    test('Debe retornar 404 si el usuario a actualizar no existe', async () => {
        jest.spyOn(Usuario, 'findByIdAndUpdate').mockResolvedValue(null);

        const response = await request(app)
            .put('/usuario/idInexistente')
            .send({ nombre: 'Nadie' });

        expect(response.statusCode).toBe(404);
        expect(response.body).toHaveProperty('error', 'Usuario no encontrado');
    });
});

// 5. DELETE Eliminar usuario 
describe('DELETE /usuario/:id', () => {
    test('Debe eliminar un usuario y retornar mensaje de confirmación', async () => {
        const usuarioMock = { _id: '123abc', nombre: 'Alan', edad: 21, correo: 'alan@gmail.com' };

        jest.spyOn(Usuario, 'findByIdAndDelete').mockResolvedValue(usuarioMock);

        const response = await request(app).delete('/usuario/123abc');

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'Usuario eliminado');
    });

    test('Debe retornar 404 si el usuario a eliminar no existe', async () => {
        jest.spyOn(Usuario, 'findByIdAndDelete').mockResolvedValue(null);

        const response = await request(app).delete('/usuario/idInexistente');

        expect(response.statusCode).toBe(404);
        expect(response.body).toHaveProperty('error', 'Usuario no encontrado');
    });
});

//////////////

// Extra 1: GET Ruta de bienvenida
describe('GET /', () => {
    test('Debe retornar el mensaje de bienvenida', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Bienvenido a mi API CRUD');
    });
});