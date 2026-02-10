// i) Crea un módulo que contenga funciones matemáticas aritméticas (suma, resta, etc.) y utilízalo en otro archivo.
// Módulo de operaciones matemáticas

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    return "No se puede dividir entre cero";
  }
  return a / b;
}

// Exportamos las funciones
module.exports = {
  suma,
  resta,
  multiplicacion,
  division
};
