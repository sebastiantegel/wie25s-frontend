import "./style.css";

// Funktion när klicket på en bil händer
const handleClick = (car) => {
  console.log(car);
};

// Funktion när submit händer
const handleSubmit = (e) => {
  // Avbryt default POST request
  e.preventDefault();

  // Hämta värden från alla inputs
  const manufacturer = document.getElementById("manufacturerFromUser").value;
  const model = document.getElementById("modelFromUSer").value;
  const year = document.getElementById("yearFromUser").value;
  const color = document.getElementById("colorFromUser").value;

  // Skapa ett nytt bil-objekt
  const car = new Car(model, manufacturer, color, year);

  // Lägg till det nya objektet i listan
  cars.push(car);

  // Spara hela listan, inklusive den nya bilen i localStorage
  localStorage.setItem("cars", JSON.stringify(cars));

  // Rita om alla html för den nu uppdaterade listan
  createHtml();
};

// Skapa en class som beskriver en vil
class Car {
  model;
  manufacturer;
  color;
  year;

  constructor(model, manufacturer, color, year) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.color = color;
    this.year = year;
  }
}

// const tempCars = [
//   new Car("Micra", "Nissan", "Röd", 1985),
//   new Car("95", "SAAB", "Silver", 1995),
//   new Car("V90", "Volvo", "Brun", 2005),
//   new Car("S", "Tesla", "Blue", 2018),
// ];

// Hämta bilar från localStorage, om det inte finns någonting i localStorage använd []
const cars = JSON.parse(localStorage.getItem("cars") || "[]");

// console.log(cars);

// Funktion för att rita om all html för alla bilar i listan
const createHtml = () => {
  // Hitta <div> som finns i index.html
  const carsContainer = document.getElementById("cars");

  // Töm <div> på innehåll
  carsContainer.innerHTML = "";

  // Skapa html för alla objekt i listan
  for (let i = 0; i < cars.length; i++) {
    // Skapa en <div>
    const carContainer = document.createElement("div");

    // Skapa en <h2>
    const manufacturerTag = document.createElement("h2");

    // Skapa en <h3>
    const modelTag = document.createElement("h3");

    // Placera innehåll i taggarna
    manufacturerTag.innerHTML = cars[i].manufacturer;
    modelTag.innerHTML = cars[i].model;

    carContainer.appendChild(manufacturerTag);
    carContainer.appendChild(modelTag);
    carContainer.className = "car";
    carContainer.addEventListener("click", () => {
      handleClick(cars[i]);
    });

    carsContainer.appendChild(carContainer);
  }
};

// Rita ut bilarna på skärmen
createHtml();

// Lyssna efter händelsen submit på <form>
document.getElementById("carForm").addEventListener("submit", handleSubmit);
