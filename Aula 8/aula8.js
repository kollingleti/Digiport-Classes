/// Faca um script que leia tres numeros IntersectionObserver, em seguida mostre o maior e o menor deles


function encontrarMaiorEMenorNumero(num1, num2, num3) {
  let maior = Math.max(num1, num2, num3);
  let menor = Math.min(num1, num2, num3);
  console.log("O maior número é: " + maior);
  console.log("O menor número é: " + menor);
}

// Exemplo de uso
encontrarMaiorEMenorNumero(10, 5, 8); // Saída: O maior número é 10, O menor número é 5

///// segundo jeito 

function encontrarMaiorEMenorNumero(num1, num2, num3) {
  let maior, menor;

  if (num1 >= num2 && num1 >= num3) {
    maior = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    maior = num2;
  } else {
    maior = num3;
  }

  if (num1 <= num2 && num1 <= num3) {
    menor = num1;
  } else if (num2 <= num1 && num2 <= num3) {
    menor = num2;
  } else {
    menor = num3;
  }

  console.log("O maior número é: " + maior);
  console.log("O menor número é: " + menor);
}

// Exemplo de uso
encontrarMaiorEMenorNumero(10, 5, 8); // Saída: O maior número é 10, O menor número é 5

/// o sistema precisa verificar o tipo de numero informado. exiba se o numero e positivo, negativo ou zero.

function verificarNumero(numero) {
  if (numero > 0) {
    console.log("O número " + numero + " é positivo.");
  } else if (numero < 0) {
    console.log("O número " + numero + " é negativo.");
  } else {
    console.log("O número é zero.");
  }
}   


verificarNumero(10); // Saída: O número 10 é positivo.
verificarNumero(-5); // Saída: O número -5 é negativo.


function verificarNumero(numero) {
    if (numero > 0) {
        console.log("O número é positivo");
    } else {
        if (numero < 0) {
            console.log("O número é negativo");
        } else {
            console.log("O número é zero");
        }
    }
}

verificarNumero(10); // Saída: O número é positivo
verificarNumero(-5); // Saída: O número é negativo
verificarNumero(0); // Saída: O número é zero

