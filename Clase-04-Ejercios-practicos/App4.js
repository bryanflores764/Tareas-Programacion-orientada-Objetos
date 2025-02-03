// Se solicita configurar un programa que según las siguientes faltas se imponga
// una sanción económica dentro de una institución estudiantil privada.
// • Llegada tardía $1.
// • Caminar por los pasillos en horas de clase $3.
// • No andar vestimenta apropiada $5.
// • No hacer uso adecuado de las instalaciones $10.
// Si el estudiante comete una infracción mostrar un mensaje con el nombre y la
// infracción mas el total que le corresponde cancelar.

class Falta {
  constructor(Nombre, Apellido) {
    this._Nombre = Nombre;
    this._Apellido = Apellido;
    this._Sanciones = 0;
  }

  get nombre() {
    return this._Nombre;
  }

  get apellido() {
    return this._Apellido;
  }

  registroInfraccion(infraccion) {
    let costo = 0;
    switch (infraccion) {
      case "llegada tardia":
        costo = 1;
        break;
      case "Caminar por los pasillos en horas de clases":
        costo = 3;
        break;
      case "No andar vestimenta apropiada":
        costo = 5;
        break;

      case "No hacer uso adecuado de las instalaciones":
        costo = 10;
        break;
      default:
        console.log("Infraccion desconocida");
        break;
    }


    console.log(`${this.nombre} ${this.apellido} ah cometido una infracion ${infraccion} .costo de infracion ${costo}`)
    console.log(`Su toltal de ingraciones es ${this._Sanciones+=costo}`)
 
  }
}

// 1• Llegada tardía $1.
// 2• Caminar por los pasillos en horas de clase $3.
// 3• No andar vestimenta apropiada $5.
// 4• No hacer uso adecuado de las instalaciones $10.

let estudiante1 = new Falta("Bryan", "Ronaldo");

estudiante1.registroInfraccion('llegada tardia')
estudiante1.registroInfraccion('llegada tardia')
estudiante1.registroInfraccion('No hacer uso adecuado de las instalaciones')

