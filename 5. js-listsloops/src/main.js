import "./style.css";

const numbers = [1, 1, 2, 3, 5, 8, 13];

// Listan
console.log(numbers);

// Första positionen i listan
console.log(numbers[0]);

// Sjätte positionen i listan (Sista just nu)
console.log(numbers[6]);

// Längden av listan
console.log(numbers.length);

// Alltid sista platsen i listan
console.log(numbers[numbers.length - 1]);

// Lägg till talet 21 sist i listan
numbers.push(21);
console.log(numbers);

// Ta bort det sista talet i listan (21)
numbers.pop();
console.log(numbers);

// Ta bort talet på position 2
numbers.splice(2, 1);
console.log(numbers);

const theUlTag = document.getElementById("thelist");

// [1, 1, 3, 5, 8, 13]
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);

  const li = document.createElement("li"); // <li></li>
  li.innerHTML = numbers[i]; // <li>1</li>
  li.className = "some-cool-class"; // <li class="some-cool-class">1</li>

  theUlTag.appendChild(li); // <ul><li>1</li></ul>
}

const handleClick = () => {
  // alert("Whohoo! Is working :)");

  // numbers.push(1000);

  // theUlTag.innerHTML = "";

  // for (let i = 0; i < numbers.length; i++) {
  //   console.log(numbers[i]);

  //   const li = document.createElement("li"); // <li></li>
  //   li.innerHTML = numbers[i]; // <li>1</li>
  //   li.className = "some-cool-class"; // <li class="some-cool-class">1</li>

  //   theUlTag.appendChild(li); // <ul><li>1</li></ul>
  // }

  const theInput = document.getElementById("firstname");
  const firstnameFromUser = theInput.value;
  console.log(firstnameFromUser);
};

const btn = document.getElementById("save");
// console.log(btn);
btn.innerHTML = "Hi hi hi"; // <button>Hi hi hi</button>
btn.addEventListener("click", handleClick);
