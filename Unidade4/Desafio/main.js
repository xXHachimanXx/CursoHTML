var buttonElement = document.querySelector("#app button");
var inputElement  = document.querySelector("#app input");

function myPromise(idade)
{    
    return new Promise( 
        function(resolve, reject)
        {
            setTimeout( () => { idade>=18?resolve():reject(); }, 2000 ); //2segundos de delay
        }
    );    
}
function main()
{
    var idade = inputElement.value;
    inputElement.value = "";

    myPromise(idade)
    .then( function(){        
        console.log("Maior que 18.");
    })
    .catch( function(){
        console.log("Menor que 18.");
    })

}//END MAIN()

buttonElement.onclick = main;




