class ErroCustomizado extends Error{
  constructor(mensagem, nome){
    super(mensagem);
    this.name = nome;
  }
  mensagem(){
    return this.name + "\n"+ this. mensasge +"\n" + this. stack.split("AAA");
   
  }
}
// Quem joga não pode pegar
// Após o NEW tudo é class
class Retangulo{
  constructor( altura, largura){
    this.altura = altura;
    this.largura = largura;
  }
  calcularArea(){
    
      if(this.altura > 0 && this.largura > 0){
       return this.altura*this.largura
     }
     else{
       ///return "Você errou"
       throw new ErroCustomizado("você errou", "nome do erro")
     }
  }
    area(){
        try{
     return this.calcularArea();
          }catch(error){
          return error.stack
          return error.mensagem()
          
          
          }
    }
  }
 



let retangulo  = new Retangulo ("0","30");
console.log (retangulo.area())
console.log (retangulo.area())


