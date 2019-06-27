/*
 * Promisses são funcções que não interferem na linha do tempo do script.
 */
var myPromise = function() {
    return new Promise( 
        function(resolve, reject) 
        {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://api.github.com/users/xXHachimanXx');
            xhr.send(null);

            xhr.onreadystatechange = function() {
                if(xhr.readyState === 4)
                {
                    //se tiver OK...
                    if(xhr.status === 200)
                    {
                        resolve(JSON.parse(xhr.responseText));                    
                    }
                    else
                    {
                        reject("Erro na requisição.");
                    }// end if
                }//end if
            }//end function()
        }//end function()
    );
}

//lê-se: myPromise().then().catch();
myPromise()
    .then( function(response) {
        console.log(response);
    })

    .catch( function(error) {
        console.warn(error);
    });