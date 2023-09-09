
console.log('script file is runnig well : Start')

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

const loop = setInterval(() => {

    console.log('loop started executing');
  
    console.log(loop);

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace("px", " ");

    console.log(marioPosition);

    if (pipePosition <= 120 &&pipePosition>0 && marioPosition<80  ) {
      pipe.style.animation = "none";
      pipe.style.left = `${pipePosition}px`;

      mario.style.animation = "none";
      mario.style.bottom = `${marioPosition}px`;
      heading.textContent ='Game over-Arjun '
       

      mario.src = "./images/game-over.png";
      mario.style.width = "75px";
      mario.style.marginLeft = "50px";

clearInterval(loop)

    }
  }, 10);


document.addEventListener("keydown", jump);


console.log('script file is runnig well : End')
