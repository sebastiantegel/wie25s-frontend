describe("Todo tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should show hard coded value", () => {
    // Assign

    // Act

    // Assert
    cy.get("li").should("have.length", 3);
    cy.get("li").first().should("contain.text", "Lorem");
  });

  it("should add a todo ", () => {
    // Assign
    const text = "Hej hej";

    // Act
    cy.get("input#todoText").type(text);
    cy.get("button").click();

    // Assert
    cy.get("li").should("have.length", 4);
    cy.get("li").last().should("contain.text", text);
  });

  it("should not add empty todo", () => {
    // Assign

    // Act
    cy.get("button").click();

    // Assert
    cy.get("li").should("have.length", 3);
  });
});
