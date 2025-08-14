let thingslike = ["Pizza", "Brigadeiro", "Pistache", "Sushi", "Burgers"];
let numbers = [1, 2, 3, 4, 5];
let booleanValues = [true, false, true, false];
let mixedArray = ["Hello", 42, true, null, { key: "value" }];
let emptyArray = [];

console.log(thingslike);
console.log(numbers);
console.log(booleanValues);
console.log(mixedArray);       
console.log(emptyArray);

console.log(thingslike[0]); // Pizza
console.log(thingslike.push("Amendoim"));
console.log(thingslike);
console.log(numbers.length); 
console.log(mixedArray.pop()); // Removes and returns the last element (null
console.log(mixedArray); // Displays the updated mixedArray
console.log(mixedArray.unshift("New Element")); // Adds "New Element" to the beginning of the array
console.log(mixedArray); // Displays the updated mixedArray 
console.log(booleanValues.shift()); // Removes and returns the first element (true)
console.log(booleanValues)


let array1 = [1, 2, 3, 4, 5];
console.log(array1);


// verificar media da array
let total = 0;
for (let i = 0; i < array1.length; i++) {
    total += array1[i];
}       
let average = total / array1.length;
console.log("Média dos elementos do array:", average);

// soma array 
let sum = 0;
for (let i = 0; i < array1.length; i++) {
    sum += array1[i];
}

console.log("Soma dos elementos do array:", sum);


// encontrar o maior e menor numero da array

let max = array1[0];
let min = array1[0];
for (let i = 1; i < array1.length; i++) {
    if (array1[i] > max) {
        max = array1[i];
    }
    if (array1[i] < min) {
        min = array1[i];
    }
}
console.log("Maior número:", max);
console.log("Menor número:", min);  

// agora crie uma array de 5 numeros sem declarar diretamente na variavel, usando for

let generatedArray = [];
for (let i = 1; i <= 5; i++) {  
    generatedArray.push(i * 10); // Multiplicando por 10 para gerar números diferentes
}           
console.log("Array gerada:", generatedArray);