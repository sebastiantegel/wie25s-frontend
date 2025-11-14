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
});
