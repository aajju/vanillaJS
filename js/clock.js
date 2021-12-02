const clock = document.querySelector("#clock");

function showClock() {
  const date = new Date();

  //show hour pretty
  let prettyHour, prettyMinutes, prettySeconds;

  //   if (date.getHours() < 10) {
  //     prettyHour = `0${date.getHours()}`;
  //   } else {
  //     prettyHour = date.getHours();
  //   }
  //   //show minute pretty

  //   if (date.getMinutes() < 10) {
  //     prettyMinutes = `0${date.getMinutes()}`;
  //   } else {
  //     prettyMinutes = date.getMinutes();
  //   }
  //   //show second pretty

  prettyHour = String(date.getHours()).padStart(2, "0");
  prettyMinutes = String(date.getMinutes()).padStart(2, "0");
  prettySeconds = String(date.getSeconds()).padStart(2, "0");

  if (date.getSeconds() < 10) {
    prettySeconds = `0${date.getSeconds()}`;
  } else {
    prettySeconds = date.getSeconds();
  }

  clock.innerText = `${prettyHour} : ${prettyMinutes} : ${prettySeconds}`;
}

showClock();

setInterval(showClock, 1000);
