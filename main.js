let divJoke= document.querySelector('#joke');

async function showJoker() {
    let respuesta = await fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: "application/json",
        },
    });
    let joke= await respuesta.json();
    console.log(joke) 
}
showJoker()
