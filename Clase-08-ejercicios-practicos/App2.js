// 2. Cree un código que permita detectar los años de una persona, para esto deberá de
// solicitar la fecha de nacimiento con el formato “YYYY-MM-DD”, valide que la fecha
// sea una estructura valida, tome la fecha actual del servidor y ejecute su función,
// mostrando la edad de la persona, Maneje los errores según como usted considere.

class Edad {
  constructor(FechaN, Nombre) {
    this._FechaN = FechaN;
    this._Nombre = Nombre;
  }

  get fecha() {
     return this._FechaN
  }

  get nombre(){
    return this._Nombre

}

set fecha(nuevaFecha){   
   function FechaValidacion(nuevaFecha){
    const Validar = /^\d{4}-\d{2}-\d{2}$/;
    return Validar.test(nuevaFecha)
   }

   if(FechaValidacion(nuevaFecha)){
    this._FechaN = nuevaFecha
    console.log(`Fecha Añadida correctamente ${this.fecha}`)
   }else{
    console.log(`Fecha inavliada puede ser porque puso string o el formato esta malo`)
   }
    
}

Info(){
    let NombreDigitos = this.nombre.split(' ').join('')
    if(NombreDigitos.length<=20){
        function FechaValidacion(fecha){
            const Validar = /^\d{4}-\d{2}-\d{2}$/;
            return Validar.test(fecha)
           }
        if(FechaValidacion(this.fecha)){
            let FechaNacimento = new Date(this.fecha).getFullYear()
            let AñoActual = new Date().getFullYear()
    
            let Edad = AñoActual-FechaNacimento

            const Usuario ={
                Nombre:this.nombre,
                Edad:Edad
            }

            console.log(Usuario)
    
        }else {
            console.log(`Fecha inavliada puede ser porque puso string o el formato esta malo`)
        }
    }else{
console.log(`El nombre no debe ser mayor ah 20 digitos`)
    }

}
}


let usuario = new Edad(`2005-12-05`,`bryan julian ronaldo`)

console.log(usuario.fecha)

usuario.Info()
