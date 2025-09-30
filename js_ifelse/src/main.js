import "./style.css";

// if/else

const x = 100;

if (x > 10) {
  // Om villkor är true
} else {
  // Om villkor är false
}

// Exempel
if (x > 10) {
  // Om x är större än 10
  console.log("Det var ett enormt stort tal");
} else {
  // Om x är mindre än eller lika med 10
  if (x === 10) {
    // Om x är exakt 10
    console.log("Talet är exakt 10");
  } else {
    // Om x är mindre än 10
    console.log("Ett pyttelitet tal");
  }
}

// DOM
const theDiv = document.getElementById("app");
console.log(theDiv);

if (theDiv) {
  theDiv.className = "red";
}

// theDiv.className = "red";
