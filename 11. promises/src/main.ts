import type { OmdbResponse } from "./models/OmdbResponse";
import "./style.css";

// const x = 30;

// const p = new Promise(
//   (resolve: (value: string) => void, reject: (reason: string) => void) => {
//     setTimeout(() => {
//       if (x >= 30) {
//         resolve("Success! We got the value!");
//       } else {
//         reject("Det tog för lång tid, alla användare drog");
//       }
//     }, 4000);
//   }
// );

// p.then(
//   (message: string) => {
//     console.log("Resolve", message);
//   },
//   (reason: string) => {
//     console.log("Reject", reason);
//   }
// );

// console.log("End");

const p = fetch("https://omdbapi.com/?apikey=416ed51a&s=harry");

// p.then((response: Response) => {
//   console.log(response);

//   const res = response.json();

//   res.then((data) => {
//     console.log(data.Search);
//   });
// });

const app = document.getElementById("app");

p.then((response: Response) => response.json()).then((data: OmdbResponse) => {
  console.log(data.Search);

  data.Search.forEach((movie) => {
    const container = document.createElement("div");
    const title = document.createElement("h2");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");

    container.className = "movie";
    title.innerHTML = movie.Title;
    img.src = movie.Poster;
    img.alt = movie.Title;
    imgContainer.className = "imageContainer";
    imgContainer.appendChild(img);

    container.addEventListener("click", () => {
      console.log(movie.imdbID);
    });

    container.appendChild(title);
    container.appendChild(imgContainer);
    app?.appendChild(container);
  });
});
