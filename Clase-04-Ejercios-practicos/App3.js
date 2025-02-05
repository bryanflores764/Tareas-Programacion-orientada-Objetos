// Se necesita un programa que registre notas de los usuarios, las notas llevaran
// un titulo y un detalle. Se solicita que el programa cuente las palabras que tiene
// el detalle de la nota y muestre la cantidad al guardar la nota. (la nota no se debe
// de almacenar en ningún lugar simplemente es simulación del requerimiento, lo
// importante es contar las palabras en el detalle).

class Notas{
    constructor(Titulo,Detalle){
        this._Titulo=Titulo;
        this._Detalle=Detalle;


    }


    get titulo(){
        return this._Titulo
    }

    get detalle(){
        return this._Detalle
    }
    contadorPalabras(){
        if(this.titulo.length >0 && this.detalle.length >0){

            let detalle = this.detalle.trim().split(/\s+/)
            let titulo = this.titulo.trim().split(/\s+/)

            console.log(`El nuemro de palabras de su titulo son: ${titulo.length}`)
            console.log(`El numero de palabras de su datalle son: ${detalle.length}`)
        }else{
            console.log(`El texto no debe ser cadena vacia`)
        }

        
    }
}



let estudiante= new Notas('Pez Grande','Cuando fui ah pescar canture un pez grande')

estudiante.contadorPalabras()