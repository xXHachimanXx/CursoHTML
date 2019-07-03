var buttonElement = document.querySelector("#app button");
var inputElement = document.querySelector("#app input");
var listElement = document.querySelector("#app ul");

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
    axios.get("https://api.github.com/users/"+ userName + "/repos")
        .then( function (response){ renderLista(response.data);} )
        .catch( function (error)  { console.warn(error);} )
}//end buscar()

function main()
{
    var userName = inputElement.value;    
    inputElement.value = "";
    
    buscar(userName);
}//end main()

buttonElement.onclick = main;