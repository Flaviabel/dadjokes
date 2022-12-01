let divJoke = document.querySelector('#joke');
let boton = document.querySelector('#jokeBtn');

async function showJoker() {
    let answer = await fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: "application/json",
        },
    });
    const joke = await answer.json();
    return joke
}

async function handleClick() {
    const { joke } = await showJoker();
    divJoke.textContent = joke;
}

boton.addEventListener("click", handleClick);



