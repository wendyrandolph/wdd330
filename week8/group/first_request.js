/*fetch('https://swapi.dev/api/starships/')
    .then(response => {
    return response.json()
})
.then(starships => {
    
    
});
*/
fetch('https://swapi.dev/api/starships/', {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    cache: 'no-cache'
})
    .then(response => {
        return response.json();
    })
    .then(starships => {
        console.log(starships);
    })
    .done(starships => {
        document.getElementById("myData").innerHTML = {};
    });

//.catch( // handle any errors)



