describe("Todo tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should add todo by pressing Spara", () => {
    // Assign
    const text = "Lorem ipsum";
    // const numberOfLisAtStart = cy.get("li");

    // Act
    cy.get("input#todoText").type(text);
    cy.get("button#save").click();

    // Assert
    cy.get("li").last().should("contain.text", text);
  });

  it("should add todo by pressing enter", () => {
    // Assign
    const text = "Lorem ipsum";
    // const numberOfLisAtStart = cy.get("li");

    // Act
    cy.get("input#todoText").type(`${text}{enter}`);

    // Assert
    cy.get("li").last().should("contain.text", text);
  });

  it("should remove todo when clicking remove", () => {
    // Assign
    const text = "Lorem ipsum";
    cy.get("input#todoText").type(text);
    cy.get("button#save").click();
    cy.get("li").last().should("contain.text", text);

    // Act
    cy.get("li button.remove").last().click();

    // Assert
    cy.get("li").should("have.length", 0);
  });
});
