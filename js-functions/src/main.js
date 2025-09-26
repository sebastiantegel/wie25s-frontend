// Deklaration
function myFunction() {
  console.log("Vid start");
}

// Anrop
myFunction();

// ----------------------------

// message är en parameter (variabel inuti funktionen)
function greeting(message) {
  console.log(message);
}

greeting("Lorem ipsum"); // message -> "Lorem ipsum"
greeting("Någonting helt annat"); // -> "Någonting helt annat"

// ----------------------------

function add(firstNumber, secondNumber) {
  const sum = firstNumber + secondNumber;
  console.log("Summan:", sum);
}

add(10, 20); // firstNumber -> 10, secondNumber -> 20

// ----------------------------

function sum(firstNumber, secondNumber) {
  const sum = firstNumber + secondNumber;

  return sum;
}

const s = sum(17, 3); // s -> return sum -> 20
console.log("S:", s);
