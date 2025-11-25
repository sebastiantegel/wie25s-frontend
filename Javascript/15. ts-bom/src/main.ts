import "./style.css";
import { createHtml } from "./utils/html";

let id = 0;
let geoId = 0;
let counter = 0;
const positions: GeolocationPosition[] = [];

document.getElementById("intervalStart")?.addEventListener("click", () => {
  id = setInterval(() => {
    counter++;

    const theH2Tag = document.getElementById("intervalResult");

    if (theH2Tag) {
      theH2Tag.innerHTML = counter.toString();
    }
  }, 1000);
});

document.getElementById("intervalEnd")?.addEventListener("click", () => {
  clearInterval(id);
});

document.getElementById("geoStartOnce")?.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((pos) => {
    console.log(pos);
  });
});

document.getElementById("geoStart")?.addEventListener("click", () => {
  geoId = navigator.geolocation.watchPosition((pos) => {
    positions.push(pos);
    console.log(positions);

    createHtml(positions);
  });
});

document.getElementById("geoEnd")?.addEventListener("click", () => {
  navigator.geolocation.clearWatch(geoId);
});

document.getElementById("calc")?.addEventListener("click", () => {
  const theInput = document.getElementById("fnumber");

  if (!theInput) return;

  const fibonacciNumber = (theInput as HTMLInputElement).valueAsNumber;

  fibonacci(fibonacciNumber);
});

const hash = new Map();

const fibonacci = (fnumber: number) => {
  if (hash.get(fnumber)) {
    return hash.get(fnumber);
  }

  if (fnumber === 1 || fnumber === 2) {
    hash.set(fnumber, 1);
    console.log(1);

    return 1;
  }

  const result = fibonacci(fnumber - 1) + fibonacci(fnumber - 2);
  hash.set(fnumber, result);
  console.log(result);

  return result;
};

// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
