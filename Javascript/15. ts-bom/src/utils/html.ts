export const createHtml = (positions: GeolocationPosition[]) => {
  const ul = document.getElementById("geoResult");

  if (!ul) return;

  ul.innerHTML = "";

  positions.forEach((position) => {
    const li = document.createElement("li");
    li.innerHTML = position.coords.latitude + ", " + position.coords.longitude;

    ul.appendChild(li);
  });
};
