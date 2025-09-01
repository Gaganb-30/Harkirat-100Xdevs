function displayClock() {
  const curr = new Date();
  const time = `${curr.getHours()} : ${curr.getMinutes()} : ${curr.getSeconds()}`;
  console.clear();
  console.log(time);
}

setInterval(displayClock, 1000);