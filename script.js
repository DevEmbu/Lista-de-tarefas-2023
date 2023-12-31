
const button = document.querySelector('.button-task-add')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaListaDeItens = []

//Função para Pegar o valor digitado e adicionar
function adicionarTarefas(){
    minhaListaDeItens.push(input.value)


    mostrarTarefa()
}

//Função para mostrar a que foi digitado no input e adicionar uma nova tarefa
function mostrarTarefa(){
      let novaLista = ''

      minhaListaDeItens.forEach(tarefa => {

        novaLista = novaLista + ` 
                      <li class="task">
                       <img src="./img/checkmark.png" alt="checkmark">
                         <p> ${tarefa}</p>
                       <img src="./img/trash.png" alt="lixeira">
                      </li>
                      `
      })
      listaCompleta.innerHTML  = novaLista  

}


button.addEventListener('click', adicionarTarefas)