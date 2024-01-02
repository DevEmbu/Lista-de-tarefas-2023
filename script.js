
const button = document.querySelector('.button-task-add')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaListaDeItens = []

//Função para Pegar o valor digitado e adicionar
function adicionarTarefas(){
    minhaListaDeItens.push({
      tarefa: input.value,
      tarefaConcluida: false

    })

     input.value=''
    mostrarTarefa()
}

//Função para mostrar a que foi digitado no input e adicionar uma nova tarefa
function mostrarTarefa(){
      let novaLista = ''

      minhaListaDeItens.forEach((item, index) => {

        novaLista = novaLista + ` 
                      <li class="task ${item.tarefaConcluida && "done"}">
                       <img src="./img/checkmark.png" alt="checkmark" onclick="concluirTarefa(${index})">
                         <p> ${item.tarefa}</p>
                       <img src="./img/trash.png" alt="lixeira" onclick="deletarTarefas(${index})">
                      </li>
                      `
                      
      })
    
      listaCompleta.innerHTML  = novaLista 
      
       localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))


}

function concluirTarefa(index){
 minhaListaDeItens[index].tarefaConcluida = 
 !minhaListaDeItens[index].tarefaConcluida

  mostrarTarefa()
}





function deletarTarefas(index){

  minhaListaDeItens.splice(index, 1)
  
  mostrarTarefa()
}

function recarregarTarefas(){
   const tarefasDoLocalStorage = localStorage.getItem('lista')
    
   if(tarefasDoLocalStorage){
   minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
   //console.log(tarefasDoLocalStorage)
   }
   
  mostrarTarefa()
}



button.addEventListener('click', adicionarTarefas)