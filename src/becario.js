import Alumno from './alumno';

class Becario extends Alumno {

  constructor (nombre, apellido, curso, categoria, beca){
    super(nombre,apellido);
    this._curso = curso;
    this._categoria = categoria;
    this._beca = beca;
  }

  get infoBecario() {
    return `Becario: ${this._nombre} ${this._apellido} Curso: ${this._curso} ${this._categoria} con beca ${this._beca} %`;
  }
}

export default Becario;
