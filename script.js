console.log('script file is running well: Start')

const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const heading = document.querySelector(".game");

console.log(' before jump started executing');

const jump = () => {
  console.log('jump started executing');

  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

console.log(' after jump started executing');

const checkCollision = () => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", " ");

  console.log(marioPosition);

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;
    heading.textContent = 'Game over - Arjun '

    mario.src = "./images/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    clearInterval(loop);
  }
};

const loop = setInterval(checkCollision, 10);

document.addEventListener("keydown", (event) => {
  if (event.key === " ") { // Respond to spacebar key
    jump();
  }
});

document.addEventListener("click", jump); // Respond to mouse click (desktop) and tap (mobile)

console.log('script file is running well: End')
