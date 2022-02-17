const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

function timer(){
    const date = new Date();
    let hourRatio = date.getHours() * 30;
    let minuteRatio = date.getMinutes() * 6;
    let secondRatio = date.getSeconds() * 6;
  
    hourHand.style.setProperty('--rotate',hourRatio);
    minuteHand.style.setProperty('--rotate', minuteRatio);
    secondHand.style.setProperty('--rotate', secondRatio);
}

timer()

setInterval(timer,1000)