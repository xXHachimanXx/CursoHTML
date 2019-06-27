//buscar elementos da DOM e trazer para o arquivo JS
var listElement = document.querySelector('#app ul');
var buttonElement = document.querySelector('#app button');
var inputElement = document.querySelector('#app input');

// todos = oQueEstála ou, se n tiver nada, recebe um array vazio
var toDos = JSON.parse(localStorage.getItem('list_toDos')) || [];

/*
 * Metodo para renderizar todos os toDos.
 */
function renderToDos()
{
    listElement.innerHTML = ''; // apagar todos os elementos da lista do HTML(innerHTML)

    for(var y = 0; y < toDos.length; y++) 
    {
        // Criar list element
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(toDos[y]);
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
        
        // Criar botão excluir
        var deleteElement = document.createElement('a');
        var deleteElementText = document.createTextNode(' Excluir');
        deleteElement.appendChild(deleteElementText);
        deleteElement.setAttribute('href', '#'); //setar uma referência à um caminho(link)
        deleteElement.setAttribute('onclick', 'removeTodo(' + y + ')');
        todoElement.appendChild(deleteElement); //linkar o link com o respectivo toDo
        
    }
}

function addTodo()
{
    var newTodotext = inputElement.value;    
    toDos.push(newTodotext);
    inputElement.value = '';
    renderToDos();
    saveToStorage();
}

function removeTodo(pos)
{
    toDos.splice(pos, 1); //remover '1' elemento a partir de 'pos'
    renderToDos();
    saveToStorage();
}

function saveToStorage()
{
    // localStorage é uma variável global para tratar armazenamentos
    // setItem(arg1, arg2) -> arg1 == nome da string a ser salva
    //                     -> arg2 == string a ser salva
    localStorage.setItem("list_toDos", JSON.stringify(toDos)); //passa o vetor para JSON e 
                                                                //dps transformar em String

}

renderToDos();
buttonElement.onclick = addTodo; 


