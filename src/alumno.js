class Alumno {

  constructor(nombre,apellido){
    this._nombre = nombre;
    this._apellido = apellido;
  }

  get nombreAlumno(){
    return this._nombre+' '+this._apellido;
  }

  set nuevoCurso(curso){
    this._curso = curso;
  }

  get nombreCurso(){
    return `El alumno ${this._nombre} ${this._apellido} está inscripto al curso de ${this._curso}`;
  }


}

export default Alumno;
