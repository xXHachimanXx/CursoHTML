var buttonElement = document.querySelector("#app button");
var inputElement = document.querySelector("#app input");
var listElement = document.querySelector("#app ul");

function loading()
{
    listElement.innerHTML = ""; //limpar lista antes de executar

    var liElementText = document.createTextNode("carregando...");
    var liElement     = document.createElement("li");

    liElement.appendChild(liElementText);
    listElement.appendChild(liElement);
}

function renderLista(repositories)
{    
    for( repos of repositories )
    {
        const liElementText = document.createTextNode(repos.name);
        const liElement     = document.createElement("li");

        liElement.appendChild(liElementText);
        listElement.appendChild(liElement);
    }
}//end renderLista()


function buscar(userName)
{
    listElement.innerHTML = ""; //limpar lista antes de executar
    
    axios.get("https://api.github.com/users/"+ userName + "/repos")
        .then( function (response){ renderLista(response.data);} )
        .catch( function (error)  { alert("Usuário inexistente.");} );
}//end buscar()

function main()
{
    var userName = inputElement.value;    
    inputElement.value = "";
    
    loading();
    buscar(userName);
}//end main()

buttonElement.onclick = main;