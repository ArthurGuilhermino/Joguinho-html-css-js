let mario = document.querySelector("#mario");
let pipe = document.querySelector("#pipe");
let resul = document.querySelector("#resul");
let gameover = document.querySelector("#over");
let pontuacao = document.querySelector("#pontuacao");
let marioOver = document.querySelector("#mario-over");
let btnReload = document.querySelector(".btn-reload");

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    mario.classList.add("jump");

    setTimeout(() => {
      mario.classList.remove("jump");
    }, 500);
  }
});

btnReload.addEventListener("click", () => {
  window.location.reload(true);
});

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    // mario.src.display = "none";  a fazer continuar amanhã

    mario.src = "img/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    gameover.src = "img/game-over.jpg";
    gameover.style.display = "block";

    btnReload.style.display = "block";

    clearInterval(loop);
    clearInterval(pontos);
  }
}, 10);

let contador = 0;
const pontos = setInterval((valor = 1) => {
  contador = contador + valor;

  pontuacao.innerHTML = `Pontos: ${contador}`;
}, 150);
