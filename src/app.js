import Alumno from './alumno';

const miAlumno = new Alumno('Lucas','Rousseaux');

miAlumno.nuevoCurso = 'React';

console.log(miAlumno.nombreCurso);

import Becario from './becario';

const miBecario = new Becario('Lucas','Rousseaux','React','Externo',0.50);

console.log(miBecario.infoBecario);

import {espar,factorial,persona,literal,porcentajeBecarios,desempenio} from './funciones.js';

console.log(espar(2));
console.log(factorial(5));
console.log(persona('Lucas','15.5046.6264'));
//console.log(literal.nombrecompleto());

import productos from './stock.js';

for (let key in productos) {
  console.log(productos[key].nombre);
}

for (let key in productos) {
  if (productos[key].nombre == 'iphone 8'){
    console.log(productos[key].cantidad);
  }
}

for (let key in productos) {
  productos[key].cantidad += 2;
}

for (let key in productos) {
  if (productos[key].categoria == 'computadora') {
    console.log(productos[key].nombre);
  }
}

let totalstock = 0;

for (let key in productos) {
  totalstock += productos[key].cantidad;
}

console.log(totalstock);
