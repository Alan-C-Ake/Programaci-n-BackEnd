// a) Integrar la información de cada ejercicio en comentarios
// Ejercicios 1.2.1: Sintaxis Básica de Node.js
// Alumno: Alan Alberto Colli Ake

console.log("=== Ejercicios 1.2.1: Sintaxis Básica de Node.js ===");
console.log("Alumno: Alan Alberto Colli Ake\n");

// b) Declaración de diferentes tipos de datos
console.log("\n--- Inciso B: Tipos de datos ---");

var entero = 10;
var decimal = 3.14;
var texto = "Hola Node.js";
var booleano = true;
var indefinido = undefined;
var nulo = null;

console.log("Entero:", entero);
console.log("Decimal:", decimal);
console.log("Texto:", texto);
console.log("Booleano:", booleano);
console.log("Indefinido:", indefinido);
console.log("Nulo:", nulo);

// c) Array con al menos cinco elementos de diferentes tipos
console.log("\n--- Inciso C: Arreglo ---");

var arreglo = ["Hola", 25, true, 3.5, null];
console.log("Arreglo:", arreglo);

// d) Función polinómica de segundo grado
console.log("\n--- Inciso D: Función polinómica de segundo grado ---");

function polinomioSegundoGrado(a, b, c, x) {
  let resultado = a * x * x + b * x + c;
  console.log("Resultado del polinomio:", resultado);
}

polinomioSegundoGrado(1, 2, 3, 2);

// e) Función flecha que manipula un string
console.log("\n--- Inciso E: Función flecha ---");

const manipularCadena = (cadena) => {
  console.log("Cadena en mayúsculas:", cadena.toUpperCase());
};

manipularCadena("javascript");

// f) Bucle descendente
console.log("\n--- Inciso F: Bucle descendente ---");

function imprimirDescendente() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

imprimirDescendente();

// g) Objeto institución
console.log("\n--- Inciso G: Objeto institución ---");

var institucion = {
  nombre: "Instituto Tecnológico",
  carrera: "Ingeniería en Sistemas",
  alumnos: 1200
};

// h) Método del objeto
console.log("\n--- Inciso H: Método del objeto ---");

institucion.descripcion = function () {
  console.log(
    "La institución " +
      this.nombre +
      " ofrece la carrera de " +
      this.carrera +
      " y cuenta con " +
      this.alumnos +
      " alumnos."
  );
};

institucion.descripcion();

// j) Función asincrónica con setTimeout
console.log("\n--- Inciso J: Operación asincrónica ---");

function operacionAsincrona(callback) {
  setTimeout(() => {
    callback("Operación asincrónica completada");
  }, 2000);
}

operacionAsincrona((mensaje) => {
  console.log(mensaje);
});

// k) Conversión de cadena a número con manejo de errores
console.log("\n--- Inciso K: Conversión de cadena a número ---");

function convertirANumero(cadena) {
  try {
    let numero = Number(cadena);
    if (isNaN(numero)) {
      throw new Error("No es un número válido");
    }
    console.log("Número convertido:", numero);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

convertirANumero("123");
convertirANumero("abc");
