import Alumno from './alumno.js'
import Becario from './becario.js'

const espar = (numero) => {
  if (numero % 2 == 0){
    return true;
  } else {
    return false;
  }
}


const factorial = (n) => {
	let total = 1;
	for (let i = 1; i <= n; i++) {
		total = total * i;
	}
	return total;
}

const persona = (nombre,telefono) => {
  const Objeto = {
    name : nombre,
    phone: telefono
  }
  return Objeto;
}

const literal = {
  'nombre': 'Lucas',
  'apellido': 'Rousseaux',
  nombrecompleto: () => alert(this.nombre)
}


const procentajeBecarios = (inscriptos) => {
  console.log(inscriptos.length);
  return inscriptos.reduce((acum,value) => {if (instanceof(value) == 'Becario') {return acum+=1;}}) / inscriptos.length;
}

const becadosxdesempenio = (inscriptos) => {return 1;}

export {espar,factorial,persona,literal,porcentajeBecarios,becadosxdesempenio}
