function operacaoMat(a, b, op){
    if(op == "+") return a+b;
    if(op == "-") return a-b;
    if(op == "*") return a*b;
    if(op == "/") return a/b;
    else return "Operação inválida."
    }


    ///////////


console.log(operacaoMat(1, 2, "/"));

const toUpperCase = (eba) => {return eba.toUpperCase();}
console.log(toUpperCase("gremio"));

///////////

const idade = (nasc, atual) => {return atual-nasc;}

console.log("Você tem", idade(2006, 2025), "anos");

//////
const ehPar = (a) => {if(a%2==0) return true; return false;}
 


/////////
// 

function media(a){
    let soma=0;
    for(let i=0; i<a.length; i++)
        soma += a[i];

    return soma / a.length;
}

let num = [1, 2, 3];
console.log(media(num));
 