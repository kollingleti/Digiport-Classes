var salarioporhora = 30
var horastrabalhadas = 160

var salariofinal = salarioporhora * horastrabalhadas;
console.log(salariofinal);


/////////////// espaco


var precooriginal = 200
var desconto = 0.10

var precofinal = precooriginal - (precooriginal * desconto);
console.log(precofinal);


/////////////// espaco


var idade = 17
var maioridade = 18

if (idade >= maioridade) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

/////////////// espaco

var numero = 21;

function verificarParOuImpar() {
  if(numero % 2 == 0) {
    return "O número é par";
  } else {
    return "O número é ímpar";
  }
}

console.log(verificarParOuImpar(numero)); 


/////////////// espaco



