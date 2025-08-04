// Julia esta planejando suas ferias e precisa decidir para onde vai viajar, dependendo do saldo em sua conta bancaria. Sua decisao sera feita com base nos seguintes criterios:
// Se julia tiver 15miul ou mais na conta, ele vai para Disney
// Se o saldo for menor que 15mil e pelo menos 5mil ela vai para Minas Gerais 
// Se o saldo for inferior a 5min, ela passara um fim de semana no litornal.

let saldo = 1; // Exemplo de saldo, você pode alterar este valor para testar diferentes cenários

if (saldo >= 15000) {
    console.log("Julia vai para a Disney");
}
else if (saldo >= 5000) {
    console.log("Julia vai para Minas Gerais");
}
else {
    console.log("Julia vai passar um fim de semana no litoral");
}     

//////////////////////////

let nota = 8;

if (nota >= 7) {
    console.log("Aprovado");
}
else {
    console.log("Reprovado");
}


////////////////////////////////////////

let saldoconta = 3500;

if (saldoconta >= 10000) {
    console.log("Pode comprar o computador");
} 
else if (saldoconta > 3000) {
    console.log("Pode comprar o celular");
}
else {  
    console.log("Economizar mais um pouco");
}   


//////////////////////////////////////

let tempo = 1;

if (tempo <1) {
    console.log("Medalha de Ouro");
}

else if (tempo < 2) {
    console.log("Medalha de Prata");
}

else {
    console.log("Medalha de Bronze");
}   

//////////////////////////////////////

let dia = 6;

if (dia == 1) {
    console.log("Domingo");
}
else if (dia == 2) {
    console.log("Segunda-feira");
}
else if (dia == 3) {
    console.log("Terça-feira");
}
else if (dia == 4) {
    console.log("Quarta-feira");
}
else if (dia == 5) {
    console.log("Quinta-feira");
}
else if (dia == 6) {
    console.log("Sexta-feira");
}
else if (dia == 7) {
    console.log("Sábado");
}
else {
    console.log("Numero inválido");
}   


//////////////////////////////////////


let sdia = 5;

switch (sdia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido");
        break;
}   

//////////////////////////////////////

let notafinal = "A";

switch (notafinal) {
    case "A":
        console.log("excelente");
        break;
    case "B":
        console.log("Bom");
        break;
    case "C":
        console.log("Regular");
        break;
    case "D":
        console.log("Ruim");
        break;
    case "F":
        console.log("Insuficiente");
        break;
    default:
        console.log("Nota inválida");
        break;
}   


//////////////////////////////////////

let estacao = 1;
switch (estacao){
    case 1:
        console.log("Verão");
        break;
    case 2:
        console.log("Outono");
        break;
    case 3:
        console.log("Inverno");
        break;
    case 4:
        console.log("Primavera");
        break;
    default:
        console.log("Numero inválido");
        break;     
}


//////////////////////////////////////

let tipoCliente = "Ouro";

switch (tipoCliente) {
    case "Bronze":
        console.log("Desconto de 5%");
        break;
    case "Prata":
        console.log("Desconto de 10%");
        break;
    case "Ouro":
        console.log("Desconto de 15%");
        break;
    case "Platina":
        console.log("Desconto de 20%");
        break;
    default:
        console.log("Tipo de cliente inválido");
        break;
    }