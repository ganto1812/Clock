
const secondsHand = document.querySelector('.second');
const minutesHand = document.querySelector('.minute');
const hoursHand = document.querySelector('.hour')
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDegree = (seconds*360/60)+90;
    const minutesDegree = (minutes*360/60)+90;
    const hoursDegree = (hours*360/12)+90;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegree}deg)`;
    hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);