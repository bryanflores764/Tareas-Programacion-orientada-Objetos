// El código funciona de manera correcta, pero se necesita que se apliquen las siguientes
// validaciones:
// • El nombre solo debe de aceptar texto con una longitud de 20 caracteres.
// • El teléfono debe de ser numérico de 8 números.
// • El genero solamente debe de permitir o F de femenino o M de masculino, ósea
// solo un carácter, pero al imprimir el mensaje debe de mostrar si es femenino o
// es masculino.
// • Las áreas en departamento de la empresa son: Ventas, RRHH y Administración.
// • Maneje los errores respectivos a su criterio

class Persona {
  static NumeroID = 1;
  constructor(Nombre, Telefono, Genero, Departamento) {
    this._Id = Persona.NumeroID++;
    this._Nombre = Nombre;
    this._Telefono = Telefono;
    this._Genero = Genero;
    this._Departamento = Departamento;
  }

  get id() {
    return this._Id;
  }

  set idNuevo(nuevoId) {
    this._Id = nuevoId;
    console.log(`Nuevo Id agregado ${this.id}`)
  }

  get nombre() {
    return this._Nombre;
  }

  set nombreNuevo(nuevoNombre) {
    if (nuevoNombre.length <= 20) {
      this._Nombre = nuevoNombre;
      console.log(`Nuevo nombre agregado ${this.nombre}`)
    } else {
      console.log(`La longitud de nombre no debe pasar los 20 caracteres`);
    }
  }

  get telefono() {
    return parseFloat(this._Telefono);
  }

  set telefonoNuevo(nuevotelefono) {
    if (nuevotelefono.toString().length == 8) {
         this._Telefono = nuevotelefono;
         console.log(`Nuevo telefono agregado:${this.telefono}`)
    } else {
      console.log(`El numero de debe ser igual ah 8 numeros`);
    }
  }

  get genero() {
    return this._Genero.toUpperCase();
  }

  set generoNuevo(nuevoGenero) {
    let genero2 = nuevoGenero.toUpperCase();
    if (genero2 == `F` || genero2 == `M`) {
        this._Genero = nuevoGenero
        console.log(`Nuevo genero agragado:${this.genero}`)
    } else {
      console.log(`El genero solo debe escribir F o M`);
    }
  }

  get departamento() {
    return this._Departamento.toUpperCase();
  }

  set departamentoNuevo(nuevoDepartamento) {
    let departamentoM = nuevoDepartamento.toUpperCase();
    if(departamentoM == `VENTAS` ||
        departamentoM == `RRHH ` ||
        departamentoM == `ADMINISTRACION`){
            this._Departamento = nuevoDepartamento
            console.log(`Nuevo departamento agregado:${this.departamento}`)
    }else {
        console.log(`Departamento mal escrito`)
      }
    
  }

  mostrarInfo() {
    if (this.nombre.length <= 20) {
      if (this.telefono.toString().length == 8) {
        if (this.genero == `F` || this.genero == `M`) {
          if (
            this.departamento == `VENTAS` ||
            this.departamento == `RRHH` ||
            this.departamento == `ADMINISTRACION`
          ) {
            const Info = {
              Id: this.id,
              Nombre: this.nombre,
              Telefono: this.telefono,
              Genero: this._Genero.toUpperCase(),
              Departamento: this._Departamento.toUpperCase()
            };
            console.log(Info);
          } else {
            console.log(`Departamento mal escrito`)
          }
        } else {
          console.log(`El genero solo debe escribir F o M`);
        }
      } else {
        console.log(`El numero de debe ser igual ah 8 numeros`);
      }
    } else {
      console.log(`La longitud no debe pasar los 20 caracteres`);
    }
  }
}

let Persona2 = new Persona(`bryan ronaldo flores`,74846044, `m`, `rrhh`); // el Id se da ya al crear el objeto pero si usted quiere lo puede modificar

Persona2.mostrarInfo()
Persona2.id=3
Persona2.nombreNuevo =`bryan julian`
Persona2.departamentoNuevo=`ventas`
Persona2.telefonoNuevo=74846043
Persona2.generoNuevo=`f`
Persona2.mostrarInfo()




