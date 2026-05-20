//Alan Alberto Colli Ake 8-B

function suma (a,b){
   return a+b;
}

//a. Igualdad a 10
const igualarDiez = (a, b) => a + b;

// b. Comparación de objetos
const obtenerObjetoOriginal = () => {
   return { uno: 1, dos: 2 };
};

// c. Verificación de nulos y definidos
const retornarValor = (tipo) => {
    if (tipo === 'nulo') return null;
    if (tipo === 'indefinido') return undefined;
    return 'definido';
};

// d. Comparaciones numéricas
const calcularNumero = () => 4;

// e. Coincidencia de cadenas 
const obtenerString = () => 'Alan';

// f. Verificación de contenido en arrays
const obtenerListaCompras = () => [
   'pañales',
   'pañuelos desechables',
   'bolsas de basura',
   'bolas de chocolate',
   'leche',
];

// g. Negación de Matchers
const verificarDiferente = () => 5;

//h. Pruebas Asíncronas
const fetchPromesa = (debeResolver) => {
   return new Promise((resolve, reject) => {
       return debeResolver ? resolve('atún') : reject('error');
   });
};

module.exports = {
   suma,
   igualarDiez,
   obtenerObjetoOriginal,
   retornarValor,
   calcularNumero,
   obtenerString,
   obtenerListaCompras,
   verificarDiferente,
    fetchPromesa
};