
console.log('script file is runnig well : Start')

const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const heading = document.querySelector(".game");
const vijay = document.querySelector(".vijay");
const arjun = document.querySelector(".arjun");



console.log(' before jump started executing');


const jump = () => {
    console.log('jump started executing');

    vijay.classList.add("jump");
    // arjun.classList.add("jump");
//   mario.classList.add("jump");
  setTimeout(() => {
    // mario.classList.remove("jump");
    vijay.classList.remove("jump");
    //  
  }, 500);   
};


console.log(' after jump started executing');

const loop = setInterval(() => {

    console.log('loop started executing');
  
    console.log(loop);

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
      .getComputedStyle(vijay)
      .bottom.replace("px", " ");

    console.log(marioPosition);

    if (pipePosition <= 150 &&pipePosition>0 && marioPosition<80  ) {
    //   pipe.style.animation = "none";
    //   pipe.style.left = `${pipePosition}px`;

    //   vijay.style.animation = "none";
    //   vijay.style.bottom = `${marioPosition}px`;
    //   heading.textContent ='Game over-Arjun'
       

    //   vijay.src = "./images/game-over.png";
    //   vijay.style.width = "75px";
    //   vijay.style.marginLeft = "50px";
      

clearInterval(loop)

setTimeout(() => {window.location.reload()
    
}, 2000);




    }
  }, 10);


document.addEventListener("keydown", jump);

document.addEventListener('click' , jump)


console.log('script file is runnig well : End')
