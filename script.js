let mario = document.querySelector("#mario");
let pipe = document.querySelector("#pipe");
let resul = document.querySelector("#resul");
let gameover = document.querySelector("#over");
let pontuacao = document.querySelector("#pontuacao");

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
        mario.classList.toggle("jump");
        setTimeout(() => {
            mario.classList.remove("jump");
        }, 500);
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        window.location.reload(true);
        console.log("sdds");
    }
});

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = Number(
        window.getComputedStyle(mario).bottom.replace("px", "")
    );

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "img/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";

        gameover.src = "img/game-over.jpg";
        gameover.style.display = "block";

        clearInterval(loop);
        clearInterval(pontos);
    }
}, 10);

let contador = 0;
const pontos = setInterval((valor = 1) => {
    contador = contador + valor;

    pontuacao.innerHTML = `Pontos: ${contador}`;
}, 150);
