//Classe Figura Geometrica

class FiguraGeometrica{
 constructor(base, altura){
    this.base = base
    this.altura = altura
 }
}

class retangulo extends FiguraGeometrica{
    constructor(base, altura){
        super(base, altura)
    }
    calcularArea(){
        return(this.base * this.altura)
    }
}

class circulo{
    constructor(raio){
        this.raio = raio
    }
    calcularArea(){
        return(3.14 * (raio ** 2) )
    }
}

var retangulu = new retangulo (10,20)
console.log(retangulu.calcularArea);

var circulu = new circulo (5)
console.log(circulu.calcularArea);

//Classe Animal

class animal {
    constructor(nome, especie){
        this.nome = nome
        this.especie = especie 
    }
}

class cachorro extends animal {
 latir(){
    return("auauauauauauau")
 }
}

class gato extends animal {
    latir(){
       return("miaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaau")
    }
   }


   var Cachorru = new cachorro  ('Totó', 'Cachorro')
   console.log(Cachorru.latir);

   var Gatu = new gato ('Gato', 'Gato')
   console.log(Gatu.latir);