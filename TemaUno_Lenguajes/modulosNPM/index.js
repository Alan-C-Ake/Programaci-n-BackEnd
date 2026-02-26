//import generateName from 'sillyname';

//const sillyName = generateName();

//console.log(sillyName);

import superheroes from 'superheroes';

const hero = superheroes[Math.floor(Math.random() * superheroes.length)];

console.log('Superhéroe aleatorio:');
console.log(hero);