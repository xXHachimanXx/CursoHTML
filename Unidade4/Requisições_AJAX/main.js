var xhr = new XMLHttpRequest(); //recuperar alguma informação de um servidor

xhr.open('GET', 'https://api.github.com/users/xXHachimanXx');
xhr.send(null);

xhr.onreadystatechange = function() 
{
    //se a resposta voltou...
    if(xhr.readyState === 4)
    {
        console.log(JSON.parse(xhr.responseText));
    }
}