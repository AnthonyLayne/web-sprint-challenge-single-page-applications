describe("Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  const nameInput = () => cy.get("#name-input");
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
    nameInput.should("have.value", "").type("Anthony").should("have.value", "Anthony");
  });
});
