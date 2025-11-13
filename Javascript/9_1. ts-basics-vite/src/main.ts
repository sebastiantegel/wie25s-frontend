import { Person } from "./models/Person";
import "./style.scss";
import { add } from "./utils";

const result: number = add(10, 20);

console.log(result);

const numbers: number[] = [1, 1, 2, 3, 5, 8];
const texts: string[] = ["lorem", "ipsum", "true"];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

texts.forEach((text) => {
  console.log(text);
});

const me: Person = new Person("Sebastian", 46, true);
const wife: Person = new Person("Hanna", 45, true);
const son: Person = new Person("Alvar", 15, false);
const daugther: Person = new Person("Astrid", 15, false);

const family: Person[] = [me, wife, son, daugther];

family.forEach((person) => {
  console.log(person);
});
