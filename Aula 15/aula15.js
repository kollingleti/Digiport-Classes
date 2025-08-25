// crie um array chamado listadetarefas. ele sera usado para guardar as tarefas que o usuario inserir"Limpar a casa", "Estudar JavaScript", "Fazer compras", "Lavar o carro", "Pagar contas"


// crie uma funcao chamada adicionartarefa. pense: quais parametros essa funcao precisa receber? O que deve acontecer dentro do corpo da funcao para que a nova tarefa seja incluida na lista?

  // dentro do corpo da funcao, use o metodo push para adicionar a nova tarefa ao array listadetarefas


let listadetarefas = [];

 
 function adicionartarefa(item) {
  listadetarefas.push(item);
}

adicionartarefa("Limpar a casa");
adicionartarefa("Estudar JavaScript");

console.log(listadetarefas);



///////////////

/*let prompt = require("prompt-sync")();

let listanova = [];    

function newtarefa(item) {
  listanova.push(item);
}

newtarefa(prompt("Digite uma tarefa: "));

*/


//// depois, teste seu codigo. adicione pelo menos uma tarefa usando a funcao. mostre a lista completa no console

function removertarefa() 

    console.log("Tarefa removida com sucesso!");
    for (let i = 0; i < listadetarefas.length; i++) {
        console.log(i + " - " + listadetarefas[i]);
    }
    let tarefaserremovida = parseInt(prompt("Digite o numero da tarefa que voce deseja remover: "));
    if (tarefaserremovida >= 0 && tarefaserremovida < listadetarefas.length) {
        listadetarefas.splice(tarefaserremovida, 1);
        console.log("Tarefa removida com sucesso!");
    } else {
        console.log("Numero invalido. Nenhuma tarefa foi removida.");       
}