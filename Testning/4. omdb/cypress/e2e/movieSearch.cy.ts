describe("Movie Search Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should contain the form", () => {
    // Assign
    // Act
    // Assert
    cy.get("form#searchForm").should("exist");
    cy.get("input#searchText").should("exist");
    cy.get("button").should("contain.text", "Sök");
  });

  it("should not search if empty textbox", () => {
    // Assign
    cy.intercept(
      { method: "GET", url: "https://omdbapi.com/?apikey=416ed51a&s=*" },
      cy.spy().as("omdbCall")
    );

    // Act
    cy.get("button").click();

    // Assert
    cy.get("@omdbCall").should("not.have.been.called");
  });

  it("should present movies after correct search", () => {
    // Assign
    cy.intercept("https://omdbapi.com/?apikey=416ed51a&s=*").as("apiCall");

    // Act
    cy.get("input#searchText").type("star{enter}");

    cy.wait("@apiCall");

    // Assert
    cy.get("#searchResult > div").should("have.length", 10);
  });

  it("should present mock data", () => {
    cy.intercept("https://omdbapi.com/?apikey=416ed51a&s=*", {
      Search: [
        {
          Title: "Detective Pikachu",
          Poster: "somerandomurltoanimage",
          imdbID: "tt123321",
        },
        {
          Title: "Star Trek",
          Poster: "somerandomurltoanimage",
          imdbID: "tt123321",
        },
      ],
    });

    cy.get("input#searchText").type("qwerty{enter}");

    cy.get("#searchResult > div > h2")
      .first()
      .should("contain.text", "Detective Pikachu");
    cy.get("#searchResult > div img")
      .first()
      .should("have.attr", "src", "somerandomurltoanimage");
    cy.get("#searchResult > div img")
      .first()
      .should("have.attr", "alt", "Detective Pikachu");
  });

  it("should contain the search text in the api url", () => {
    cy.intercept("https://omdbapi.com/?apikey=416ed51a&s=*", {
      Search: [],
    }).as("apiCall");

    cy.get("input#searchText").type("Batman{enter}");

    cy.wait("@apiCall").its("request.url").should("contain", "s=Batman");
  });
});
