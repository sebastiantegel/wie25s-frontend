import { Pokemon } from "./../../src/models/Pokemon";
describe("Pokemon tests", () => {
  it("should search for pikachu", () => {
    // Assign
    cy.visit("http://localhost:5173");

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
    cy.get("#searchText").type("ditto{enter}");

    // Assert
    cy.get("#pokemon h2").should("contain.text", "pikachu");
  });

  // it("should not make api call", () => {
  //   cy.intercept("https://pokeapi.co/*", { fixture: "pokemon.json" });
  // });

  it("should fail the api call", () => {
    cy.visit("http://localhost:5173");

    cy.intercept("https://pokeapi.co/api/v2/pokemon/*", {
      statusCode: 500,
      body: {
        message: "Ooops, something went wrong...",
      },
    });

    cy.get("#searchText").type("ditto{enter}");

    cy.get("#pokemon div.error").should("have.length", 1);
    cy.get("#pokemon div.error").should("contain.text", "Oj oj oj");
  });
});
