import "./style.css";

// Hitta HTML
const handleClick = () => {
  console.log("Du klickade på knappen");
  // myInput === <input id="firstname" class="userInput" type="text" />
  // myInput.value === Texten som står i textrutan (värdet av textrutan)

  const theValueFromTheTextbox = myInput.value;
  console.log(theValueFromTheTextbox);

  const aNumber = parseInt(theValueFromTheTextbox);
  console.log(aNumber);
};

const btn = document.getElementById("save");

if (btn) {
  btn.className = "save";
  btn.innerHTML = "Kör";

  btn.addEventListener("click", handleClick);
}

// Skapa HTML
const myInput = document.createElement("input"); // <input />

myInput.className = "userInput";
myInput.id = "firstname";
myInput.type = "text";

const theMainDiv = document.getElementById("app");
if (theMainDiv) {
  theMainDiv.appendChild(myInput);
}
