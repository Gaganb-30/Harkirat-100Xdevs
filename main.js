// function formatTime(unit) {
//   return unit.toString().padStart(2, "0");
// }

// function displayClock() {
//   const now = new Date();
//   const hours = formatTime(now.getHours());
//   const minutes = formatTime(now.getMinutes());
//   const seconds = formatTime(now.getSeconds());

//   const timeString = `${hours}:${minutes}:${seconds}`;

//   // Clear the console and print the time
//   console.clear();
//   console.log(timeString);
// }

// // Update the clock every second
// setInterval(displayClock, 1000);

// const start = Date.now();
// setTimeout(a, 3000);

// function a() {
//   const diff = Date.now() - start;
//   console.log(diff);
// }

// const fs = require("fs");

// function middle() {
//   return new Promise(function (onDone) {
//     const data = fs.readFile("a.txt", "utf-8", (err, data) => {
//       onDone(data);
//       console.log("after readfile");
//     });
//   });
// }

// function onDone(data) {
//   console.log(data);
// }

// middle().then(onDone);\

// function sum(a, b) {
//   return new Promise(function (resolve) {
//     resolve(a + b);
//   });
// }

// sum(4, 5).then(function (ans) {
//   console.log(ans);
// });

// let c = 0;
// function counter() {
//   console.clear();
//   console.log(++c);
//   setTimeout(counter, 1000);
// }

// setTimeout(counter, 1000);

// const fs = require("fs");

// // Asynchronous file read
// fs.readFile("a.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log("File contents:\n", data);
// });

// // Expensive operation below
// console.log("Starting expensive operation...");

// let sum = 0;
// for (let i = 0; i < 1e9; i++) {
//   // Increase this number for more "expense"
//   sum += i;
// }

// console.log("Finished expensive operation:", sum);

// const fs = require("fs");

// // Asynchronous write to a file
// fs.writeFile("output.txt", "Hello, this was written asynchronously!", (err) => {
//   if (err) {
//     console.error("Error writing to file:", err);
//     return;
//   }
//   console.log("File write completed.");
// });

// // Expensive operation below
// console.log("Starting expensive operation...");

// let sum = 0;
// for (let i = 0; i < 1e9; i++) {
//   // Simulate CPU-heavy task
//   sum += i;
// }

// console.log("Finished expensive operation:", sum);

// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function (err, data) {
//   console.log("data read succesfully");

//   const writeData = data.trim().split(/\s+/).join(" ");
//   fs.writeFile("output.txt", writeData, function (err) {
//     if (err) console.log(err);
//   });
// });

// function displayClock() {
//   const curr = new Date();
//   const suffix = curr.getHours() < 12 ? "AM" : "PM";
//   const time = `${curr.getHours()} : ${curr.getMinutes()} : ${curr.getSeconds()} ${suffix}`;
//   console.clear();
//   console.log(time);
//   setTimeout(displayClock, 1000);
// }

// displayClock();

// function wait(n) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, n * 1000);
//   });
// }

// console.log(wait(3).then(() => console.log("hello")));

// function sleep(m) {
//   return new Promise((resolve) => {
//     const start = Date.now();
//     while (Date.now() - start < m) {}
//     resolve();
//   });
// }

// console.log("Started");
// sleep(3000).then(() => console.log("finished now"));

/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
}

function wait2(t) {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
}

function wait3(t) {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
}

function calculateTime(t1, t2, t3) {
  const start = Date.now();
  return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(() => {
    console.log(Date.now() - start);
  });
}

function calculateTime2(t1, t2, t3) {
  const start = Date.now();
  return wait1(t1)
    .then(() => wait2(t2))
    .then(() => wait3(t3))
    .then(() => {
      console.log(Date.now() - start);
    });
}

calculateTime(2000, 8000, 4000);
calculateTime2(2000, 8000, 4000);
