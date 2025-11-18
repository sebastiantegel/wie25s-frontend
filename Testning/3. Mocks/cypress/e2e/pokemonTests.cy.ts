import { Pokemon } from "./../../src/models/Pokemon";
describe("Pokemon tests", () => {
  it("should search for pikachu", () => {
    // Assign
    cy.visit("http://localhost:5173");

    // Förbered att fånga upp och avbryta anropet mot pokemon-api:t
    // Returnera status 200 (Ok) och datat som finns i filen fixtures/pokemon.json
    cy.intercept(
      {
        method: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/*",
      },
      {
        statusCode: 200,
        fixture: "pokemon.json",
      }
    );

    // Act
    // Hitta vår textruta, skriv ditt och tryck på enter (Startar en submit)
    cy.get("#searchText").type("ditto{enter}");

    // Assert
    // Hitta <h2> i <section id="pokemon"> och kontrollera att dess innehåll
    // är pikachu (som är vår data i fixtures/pokemon.json)
    cy.get("#pokemon h2").should("contain.text", "pikachu");
  });

  // it("should not make api call", () => {
  //   cy.intercept("https://pokeapi.co/*", { fixture: "pokemon.json" });
  // });

  it("should fail the api call", () => {
    cy.visit("http://localhost:5173");

    // Förbered att fånga upp och avbryta anropet till pokemon-api:t
    // Denna gång skickar vi tillbaka status 500 - Internal server error
    // vilket indikerar att anropet misslyckades
    cy.intercept("https://pokeapi.co/api/v2/pokemon/*", {
      statusCode: 500,
      body: {
        message: "Ooops, something went wrong...",
      },
    });

    // Hitta vår textruta och skriv ditto följt av enter (startar submit)
    cy.get("#searchText").type("ditto{enter}");

    // Hitta en div med klass error
    cy.get("#pokemon div.error").should("have.length", 1);

    // Hitta en div med klass error och innehåller text
    cy.get("#pokemon div.error").should("contain.text", "Oj oj oj");
  });
});
