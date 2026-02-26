//Alan Alberto Colli Ake
/* REFLEXIÓN - EJERCICIO 1.3

1. ¿Cuál es la diferencia fundamental entre un módulo nativo (como 'fs')
y un módulo de NPM (como 'sillyname') en cuanto a su origen e instalación?

El módulo nativo como 'fs' ya viene incluido con Node.js y simplemente se puede usar directamente en el código.

En cambio el módulo de NPM como 'sillyname' es un paquete externo y para poder utilizarlo primero debe instalarse.

2. Investigando la sintaxis: ¿Qué diferencia existe entre 'require' (CommonJS)
y 'import' (ES Modules)? Considera el momento en que se cargan los módulos.

La principal diferencia es cómo y cuándo se cargan los módulos.

'require' carga los módulos durante la ejecución del programa.
'import' se procesa de forma estática antes de que el código se ejecute.

3. Sobre el archivo 'package. json': 
a) ¿Por qué es vital compartir este archivo pero NO la carpeta 
'node_modules' al subir a un repositorio?

El archivo package.json contiene la información del proyecto y la lista de dependencias necesarias.

La carpeta node_modules no se comparte porque es muy pesada, y se recrea usando npm install, por eso solo se sube package.json.
 
b) ¿Qué sucede si ejecutas 'npm install' en una carpeta que solo tiene el package. json?

npm install leería el package.json y descargará todas las dependencias listadas
y creará automáticamente la carpeta node_modules en si recontruiria todo el proyecto.
*/
