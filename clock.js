const secondsHand = document.querySelector(".second");
const minutesHand = document.querySelector(".minute");
const hoursHand = document.querySelector(".hour");
const body = document.getElementsByTagName("BODY")[0];

const indicators = document.querySelectorAll(".indicator");

let previous = 0;
indicators.forEach(indicator => {
  indicator.style.transform = `rotateZ(${previous}deg)`;
  previous += 6;
});

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondsDegree = (seconds * 360) / 60 + 90;
  const minutesDegree = (minutes * 360) / 60 + 90;
  const hoursDegree = (hours * 360) / 12 + 90;
  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
  minutesHand.style.transform = `rotate(${minutesDegree}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegree}deg)`;

  const text = document.querySelector("p");
  changeBackground();
  function changeBackground() {
    if (hours >= 20 || hours < 5) {
      body.style.backgroundImage = "linear-gradient(darkblue, black)";
      text.style.color = "white";
      text.style.textShadow = "2px 2px 100px white";
    } else if (hours >= 12 && hours < 20) {
      body.style.backgroundImage = "linear-gradient(yellow, orange)";
    } else {
      body.style.backgroundImage = "linear-gradient(lightSkyBlue, white)";
    }
  }
}

setInterval(setDate, 1000);
