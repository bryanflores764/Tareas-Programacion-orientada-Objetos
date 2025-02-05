// Una empresa de loterías digitales solicita un programa en el que se pueda jugar
// con números del 0 al 99. El Usuario elige un número y la cantidad con la que
// desea comprar el número, puede comprarlo de $1, $5, $10, $20 etc.
// • El programa deberá de dar un número aleatorio entre 0-99 si el usuario
// adivina el número aleatorio que da el sistema, debe de mostrar un
// mensaje de felicitación mas el premio que seria lo que pago por el
// número multiplicado por 20.
// • Si el usuario no adivina el número aleatorio, mostrar un mensaje de que
// el numero no fue acertado y que reintente nuevamente.
// • El usuario solamente puede escoger un numero a la vez.


function obtenerNumeroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

let numeroAleatorio = obtenerNumeroAleatorio(0,99)
class Apuesta{
    constructor(Nombre,Cantidad,Numero){
        this._Nombre =Nombre;
        this._Cantidad=Cantidad;
        this._Numero=Numero;
    }

    get nombre (){
        return this._Nombre
    }

    get cantidad (){
        return parseFloat(this._Cantidad)
    }

    get numero(){
        return parseFloat(this._Numero)
    }

    Apuesta(){
        if(this._Nombre.length>0){
            if(Number.isFinite(this.numero)&&Number.isFinite(this.cantidad)){
                if(this.numero===numeroAleatorio){
                    let premio = this.cantidad*20
                    console.log(`Felizidades ${this.nombre} adivinaste el numero la cantidad que apostate fue ${this.cantidad}`)
                    console.log(`Tu premio es la cantidad que apostaste multiplicada por 20 tu premio es de ${premio.toFixed(2)}`)
                }else{
                    console.log(`Locentimos no adivinaste el numero el numero era ${numeroAleatorio}`)
                }

            }else{
                console.log(`La cantidad ah apostar y el numero aleatorio deben ser numericos no texto ni cadena vacia`)
            }

        }else {
            console.log(`el nombre no debe ser cadena vacia`)
        }


         
    }
}

let participante1 = new Apuesta('bryan','20 ','50' )//para que salga mas facil encontrar el numero aleatorio solo ponga numeroAleatorio esa variable dentro del atributo de numero

participante1.Apuesta()