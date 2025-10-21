const handleRemove = (theList, index) => {
  theList.splice(index, 1);
  createHtml(theList);
};

export const createHtml = (chessPlayers) => {
  const playersContainer = document.getElementById("players");
  playersContainer.innerHTML = "";

  for (let i = 0; i < chessPlayers.length; i++) {
    const playerContainer = document.createElement("article");
    const name = document.createElement("h2");
    const countryTag = document.createElement("p");
    const ratingTag = document.createElement("span");

    name.innerHTML = chessPlayers[i].name;
    countryTag.innerHTML = chessPlayers[i].country;
    ratingTag.innerHTML = chessPlayers[i].rating;

    playerContainer.addEventListener("click", () => {
      //   chessPlayers.splice(i, 1);
      //   createHtml(chessPlayers);
      handleRemove(chessPlayers, i);
    });

    playerContainer.appendChild(name);
    playerContainer.appendChild(countryTag);
    playerContainer.appendChild(ratingTag);

    playersContainer.appendChild(playerContainer);
  }
};
