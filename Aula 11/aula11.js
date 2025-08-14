// voce precisa imprimir os numeros de 1 a 10 e para cada numero informar se ele é par ou impar
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} é par`);
    } else {
        console.log(`${i} é ímpar`);
    }
}


// joao esta colhendo macas. ele colheu macas durante 7 dias. cada dia ele conta quantas colheu. imprima quantas macas ele colheu cada dia.

/*const prompt = require('prompt-sync')();

for (let dia =1; dia <= 7; dia++) {
    let macasColhidas = prompt(`Quantas maçãs João colheu no dia ${dia}? `);
    console.log(`João colheu ${macasColhidas} maçãs no dia ${dia}.`);
}       
*/

///voce recebeu 10 numeros para analisar . conte qunatos sao postivos, quantos sao negativos e quantos sao zeros

let num = [3, -1, 0, 5, -2, 8, 0, -4, 6, 1];

if (num === 0) {
    console.log("O número é zero.");
}
else if (num > 0) {
    console.log("O número é positivo.");
}
else {
    console.log("O número é negativo.");
}   

for (let i = 0; i < num.length; i++) {
    if (num[i] > 0) {
        console.log(`${num[i]} é positivo`);
    } else if (num[i] < 0) {
        console.log(`${num[i]} é negativo`);
    } else {
        console.log(`${num[i]} é zero`);
    }
}   

