// 3. Genere un código para un validador de stock en un inventario donde los atributos
// a manejar son producto, precio y cantidad.
// Métodos para utilizar:
// • Agregar stock: En este método vamos a cargar un producto, pero debemos de
// validar que el precio no sea negativo y que la cantidad sea mayor que 0 y
// sumárselo a la cantidad ya existente.
// • Comprar: En este método vamos a descargar un producto, pero debemos de
// validad que la cantidad a comprar sea menor o igual a la existente y que no sea
// puedan comprar con números negativos.

class Inventario {
  constructor(Cantidad, Precio,ProductoNombre) {
    this._Cantidad = Cantidad;
    this._Precio = Precio;
    this._ProductoNombre = ProductoNombre;
  }

  get cantidad() {
    return parseFloat(this._Cantidad);
  }
  set cantidad(nuevaCantidad){
    this._Cantidad=nuevaCantidad

  }

  get precio (){
    return parseFloat(this._Precio)
  }

  set precio(nuevoPrecio){
    if(Number.isFinite(parseFloat(nuevoPrecio))){   
        if(nuevoPrecio>0){
            this._Precio = nuevoPrecio
            console.log(`Nuevo precio agregado ${this.precio}`)
        }else{
            console.log(`El dato tiene que ser mayor ah 0`)
        }
      }else{
        console.log(`el dato de nuevo precio tiene que ser numerico`)
      }
    }
 

  stock(nuevaCantidad) {
    if(Number.isFinite( parseFloat(nuevaCantidad))){
        if(nuevaCantidad >0&& this.precio >0){
            this.cantidad =+ nuevaCantidad
            console.log(`Nueva cantidad de Agregada: ${nuevaCantidad} y el precio del producto es ${this.precio}`)
            console.log(`Su cantidad total es:${this.cantidad}`)
        }else{
            console.log(`El producto ah agregar no debe ser menor que cero`)
        }
    }else{
        console.log(`el dato de agregar producto tiene que ser numerico`)
    }

  }

  Comprar(numeroCompra){
    if(Number.isFinite(parseFloat(numeroCompra))){
        if(numeroCompra>0){
            if(numeroCompra <=this.cantidad){
                this.cantidad-=numeroCompra

                let TotalCompra = numeroCompra*this.precio
                const Producto={
                    Producto:this._ProductoNombre,
                    Precio:this.precio,
                    ProductoAlmacen:this.cantidad
                }

                let Factura ={
                    Nombre:this._ProductoNombre,
                    Cantidad_Compra:numeroCompra,
                    Precio_Total:TotalCompra
                }

                console.log(Producto)
                console.log(Factura)
            }else{
                console.log(`Lociento pero no tengo esa cantidad de producto la cantidad disponible es ${this.cantidad}`)
            }
        }else{
            console.log(`La compra no puede ser menor o igual que 0`)
        }
       
    }else{
        console.log(`El numero de compra tiene que ser numerico`)
    }

  }

}

let producto1 = new Inventario(`30`,`25`,`Jabon`)
producto1.stock(50)
producto1.Comprar(30)
producto1.Comprar(20)
producto1.Comprar(20)
producto1.stock(500)
producto1.Comprar(20)




