describe("Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  const nameInput = () => cy.get("input[type=text]");
  const pepperoniInput = () => cy.get("input[type=text]");
  const cheeseInput = () => cy.get("input[type=text]");

  it("sanity check", () => {
    expect(1 + 1).to.equal(2);
  });

  it("checks if the elements are showing", () => {
    nameInput().should("exist");
    pepperoniInput().should("exist");
    cheeseInput().should("exist");
  });

  it("checks if you can type in boxes", () => {
    textInput().should("have.value", "").type("It works!").should("have.value", "It works!");
  });
});
