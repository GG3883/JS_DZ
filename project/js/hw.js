//DZ 1
function gmailCheck() {
   const gmail = document.getElementById('gmail').value
   const result = document.getElementById('result')
   const regEx = /^[\w.-]+@gmail\.com$/;

   if (regEx.test(gmail)) {
      result.textContent = 'Email is correct'
   } else {
      result.textContent = 'Email not correct'
   }
}

const min = document.getElementById('minBlock')
let positionX = 0
let positionY = 0

function moveMinBlock() {
   if (positionX > 450 || positionY > 450 || positionX < 0 || positionY < 0) {
      positionX = 0;
      positionY = 0;
   }
   if (positionX < 450 && positionY === 0) {
      positionX += 2;
      min.style.left = `${positionX}px`
   } else if (positionX === 450 && positionY < 450) {
      positionY += 2;
      min.style.top = `${positionY}px`
   } else if (positionX > 0 && positionY === 450) {
      positionX -= 2;
      min.style.left = `${positionX}px`
   } else if (positionX === 0 && positionY > 0) {
      positionY -= 2;
      min.style.top = `${positionY}px`
   }
   setTimeout(moveMinBlock, );
}

moveMinBlock(); 

//DZ 2
let counter = 0
let interval

const counterVal = document.getElementById('counter')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const resumeBtn = document.getElementById('resume')
const clearBtn = document.getElementById('clear')

function startCounter() {
   if (!interval) {
      interval = setInterval(() => {
         counter++;
         counterVal.textContent = counter;
      }, 1000);
   }
}
function stopCounter() {
   if (interval) {
      clearInterval(interval);
      interval = null;
   }
}
function resumeCounter() {
   if (!interval) {
      startCounter();
   }
}
function clearCounter() {
   if (!interval) {
      counter = 0;
      counterVal.textContent = counter;
   }
}
//Пытался чтобы старт не мог запускать счётчик после паузы но не получилось
startBtn.addEventListener("click", startCounter);
stopBtn.addEventListener("click", stopCounter);
resumeBtn.addEventListener("click", resumeCounter)
clearBtn.addEventListener("click", clearCounter);