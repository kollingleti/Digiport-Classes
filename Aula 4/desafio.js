const nome = 'Luiz Otavio Miranda';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.8;

const imc = peso / (altura * altura);

let anoAtual = 2010;
const anoNascimento = anoAtual - idade;

console.log(nome, ' tem ', idade, ' anos, pesa ', peso, ' kg')

console.log('tem ', altura, ' de altura e seu IMC é de ', imc)

const palavras = nome.split(' '); // Divide a string em um array de palavras
palavras.splice(1, 1); // Remove a palavra do meio (no índice 1)
const novoNome = palavras.join(' ').toLowerCase(); // Une as palavras de volta e converte para minúsculas
console.log(novoNome, ' nasceu em ', anoNascimento); // Saída: "luiz miranda"

console.log(`${nome} tem ${idade} anos, pesa ${peso} kg`);
