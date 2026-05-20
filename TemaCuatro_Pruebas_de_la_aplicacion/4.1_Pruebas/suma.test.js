//Alan Alberto Colli Ake 8-B
const {
    suma,
    igualarDiez,
    obtenerObjetoOriginal,
    retornarValor,
    calcularNumero,
    obtenerString,
    obtenerListaCompras,
    verificarDiferente,
    fetchPromesa
} = require('./suma');

// primer test suma
test('suma 1 + 2 es igual a 3', () => {
   expect(suma(1, 2)).toBe(3);
});

// SECCIÓN 2

// a. Igualdad a 10
test(' 10 + 10 es igual a 20 ', () => {
   expect(igualarDiez(10, 10)).toBe(20);
});

// b. Comparación de objetos con toEqual
test('Ambos obejetos contienen las mismas propiedades y valores', () => {
   const data = obtenerObjetoOriginal();
   expect(data).toEqual({ uno : 1, dos: 2 });
});

// c. Verificación de valores nulos y definidos
test('Verificacion de valores nulos y definidos: ', () => {
    expect(retornarValor('nulo')).toBeNull();
    expect(retornarValor('indefinido')).toBeUndefined();
  expect(retornarValor('definido')).toBeDefined();
});

// d. Comparaciones numéricas
test('Verificacion de numero mayor o menor', () => {
   const valor = calcularNumero(); 
   expect(valor).toBeGreaterThan(3);
   expect(valor).toBeLessThan(5);
   expect(valor).toBeGreaterThanOrEqual(4);
});

// e. Coincidencia de cadenas 
test('Verificacion de cadena con subcadena', () => {
   expect(obtenerString()).toMatch(/Alan/);
});

// f. Verificación de Contenido en Arrays
test('Obtener lista de compras ', () => {
   expect(obtenerListaCompras()).toContain('leche');
});

// g. Negación de Matchers
test('Verificacion de valor no es igual al otro', () => {
   expect(verificarDiferente()).not.toBe(0); 
});

// h. Pruebas Asíncronas con Promesas
test('Crea una función que retorne una promesa', () => {
   return expect(fetchPromesa(true)).resolves.toBe('atún');
});
test('Verificar el rechazo de la promesa utilizando .rejects', () => {
   return expect(fetchPromesa(false)).rejects.toBe('error');
});