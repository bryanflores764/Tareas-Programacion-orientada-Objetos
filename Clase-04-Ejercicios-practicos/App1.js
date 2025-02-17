// 1. Un GYM necesita un programa que evalué el IMC (índice de masa muscular) de
// los hombres y mujeres que mes a mes se inscriben en sus membresías, el
// cliente solicita que solo se coloquen sus datos respectivos para la formula y que
// el programa muestre el resultado de su IMC.

class IMC {
  constructor(Nombre, Altura, Peso) {
    this._Nombre = Nombre;
    this._Altura = Altura;
    this._Peso = Peso;
  }

  get nombre() {
    return this._Nombre;
  }

  get peso() {
    return parseFloat(this._Peso);
  }

  get altura() {
    return parseFloat(this._Altura);
  }

  indiceDeMasaMuscular() {

    if (Number.isFinite(this.peso) && Number.isFinite(this.altura)) {
      if (this.altura > 0 && this.peso > 0) {
        let IMC = this.peso / (this.altura * this.altura);
        console.log(`Su IMC ${this._Nombre} es de:${IMC.toFixed(2)}`);
      } else {
        console.log(`La altura y el peso tiene que ser mayor ah 0`);
      }
    } else {
      console.log(`Los datos tienen que ser numericos no cadena vacia ni texto`);
    }
  }
}

let Usuario1 = new IMC("bryan","1.70", "100"); // la altura debe ser en metros la debe escribir con un punto

Usuario1.indiceDeMasaMuscular();
