// PARA condicao inicial ; teste ; atualiza condicao 
// faca isso 

for (let i = 1; i <= 10; i++) {
    console.log("Colocando bombom na caixinha " + i)
}   


let bateria = 100;

while (bateria > 20) {
    console.log("Robo andando... Bateria em " + bateria + "%");
    bateria -= 15; // diminui a bateria em 15% a cada passo
}   

console.log("Bateria baixa, preciso recarregar!");


////////

const nomes = ["Ana", "Flavia", "Bruna", "Diana", "Lais"];
const sorvete = ["Morango", "Chocolate", "Baunilha", "Flocos", "Limão"];

for (let i = 0; i < nomes.length; i++) {
    console.log("A " + nomes[i] + ", gosta de sorvete de " + sorvete[i]);
}       


////////////////

// rafaela esta rechando 10 donuts. os donuts multiplo de 3 recebem recheio de chocolate. os outros de baunilha. 


const array = ["1","2","3","4","5","6","7","8","9","10"]; 

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (index % 3 == 0) {
        console.log("Donut " + (index + 1) + " recheado com chocolate");
    } else {
        console.log("Donut " + (index + 1) + " recheado com baunilha");
    }                   
}


for (let i = 1; i <= 10; i++) {

    if (i % 3 === 0) {
        console.log("Donut " + i + " recheado com chocolate");
    } else {
        console.log("Donut " + i + " recheado com baunilha");
    }                   
}


////////////////////////



