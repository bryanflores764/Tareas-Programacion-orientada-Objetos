// 2. Un ing. Eléctrico solicita un programa que calcule conversiones de temperatura
// para el airea de refrigeración donde se trabaja con instalación y mantenimiento
// de aire acondicionados. El cliente solicita que el usuario coloque la
// temperatura y la escala y permita hacer diferentes conversiones como
// • Fahrenheit – Celsius.
// • Celsius – Fahrenheit.
// • Kelvin – Fahrenheit.
// • Kelvin – Celsius.

class Grados {
    constructor(Temperatura,convercion,Grados){
        this._Temperatura=Temperatura;
        this._Convercion=convercion;
        this._Grados=Grados;
    }

    get temperatura(){
        return this._Temperatura.toLowerCase()
    }

    get convercion (){
        return this._Convercion.toLowerCase()
    }
    get grados(){
        return parseFloat( this._Grados)
    }

    convercionDeGrados(){
        if(this.convercion.length >0&&this.temperatura.length>0){
            if(this.temperatura =='fahrenheit' && this.convercion=='celsius'){
                if(Number.isFinite(this.grados)){
                    if(this.grados>=0||this.grados<=-1){
                    let GradosConvertidos = (this.grados -32)*5/9
                    console.log(`Sus grados ${this.temperatura} ah convertir son:${this.grados}`)
                    console.log(`Sus grados ${this.temperatura} ah ${this.convercion}  son:${GradosConvertidos.toFixed(2)}`)
                    }else {
                        console.error('error')
                    }
                }else{
                    console.log('El dato de grados debe ser numerico no cadena vacia ni cadena de texto')
                }
       }else if(this.temperatura =='celsius' && this.convercion=='fahrenheit'){
                if(Number.isFinite(this.grados)){
                    if(this.grados>=0||this.grados<=-1){
                    let GradosConvertidos = (this.grados *9/5)+32
                    console.log(`Sus grados ${this.temperatura} ah convertir son:${this.grados}`)
                    console.log(`Sus grados ${this.temperatura} ah ${this.convercion} son:${GradosConvertidos.toFixed(2)}`)
                    }else {
                        console.error('eror')
                    }
                }else{
                    console.log('El dato de grados debe ser numerico no cadena vacia ni cadena de texto')
                }

            }else if(this.temperatura =='kelvin' && this.convercion=='fahrenheit')
            if(Number.isFinite(this.grados)){
                if(this.grados>=0||this.grados<=-1){
                let GradosConvertidos = (this.grados -273.15)*9/5+32
                console.log(`Sus grados ${this.temperatura} ah convertir son:${this.grados}`)
                console.log(`Sus grados ${this.temperatura} ah ${this.convercion} son:${GradosConvertidos.toFixed(2)}`)
                }else{
                    console.error('error')
                }
            }else{
                console.log('El dato de grados debe ser numerico no cadena vacia ni cadena de texto')
                
            }else if(this.temperatura =='kelvin' && this.convercion=='celcius' ){
                if(Number.isFinite(this.grados)){
                    if(this.grados>=0||this.grados<=-1){
                    let GradosConvertidos = (this.grados -273.15)
                    console.log(`Sus grados ${this.temperatura} ah convertir son:${this.grados}`)
                    console.log(`Sus grados ${this.temperatura} ah ${this.convercion} son:${GradosConvertidos.toFixed(2)}`)
                    }else{
                        console.error('error')
                    }
                }else{
                    console.log('El dato de grados debe ser numerico no cadena vacia ni cadena de texto')
                }
        }else{
            console.log('Error en los nombres de las temperatura ah convertir recordar que este programa solo hace converciones de:')
            console.log('• Fahrenheit - Celsius. y • Celsius - Fahrenheit. y • Kelvin - Fahrenheit.• Kelvin - Celsius.')
            console.log('y no debe de haver espacios entre las palabras y escribirlas bien')
        }
                    
        }else{
            console.log(`los datos no deben ser cadena vacia`)
        }
      
    }
}

let convercion1 = new Grados('Kelvin','fahrenheit','-70') // en el primer atributo van los grados ah convertir 
convercion1.convercionDeGrados()//en el segundo atributo va el nombre de los grados que quiere se conviertan
                                //y en el tercer atributo van el numero de grados

// • Fahrenheit – Celsius.
// • Celsius – Fahrenheit.
// • Kelvin – Fahrenheit.
// • Kelvin – Celsius.
