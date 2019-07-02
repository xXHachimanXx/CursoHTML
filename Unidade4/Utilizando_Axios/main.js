/*
 * Promisses são funcções que não interferem na linha do tempo do script.
 */

//lê-se: myPromise().then().catch();
axios.get("https://api.github.com/users/xXHachimanXx")
    .then( function(response) {
        console.log(response.data);
    })

    .catch( function(error) {
        console.warn(error);
    });