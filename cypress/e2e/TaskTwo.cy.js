///<reference types="cypress" />

describe("Task Two", () => {
  beforeEach(() => {
    cy.visit(
      Cypress.env("url") + "/en/airport/bcn/barcelona-el-prat-barcelona-spain/"
    );
    cy.get('[data-test="CookiesPopup-Accept"]').click();
  });
  it("pick random card", () => {
    cy.get('[data-test="TrendingDestinations"]')
      .should("have.length.gt", 8)
      // get the number of elements
      .its("length")
      .then((n) => Cypress._.random(0, n - 1))
      .then((k) => {
        cy.log(`picked random index ${k}`);
        // get all elements again and pick one
        cy.get('[data-test="TrendingDestinations"]').eq(k).click();
        // confirm the click
        cy.get('[data-test="TrendingDestinations"]').should("have.length", 1);
      });
  });

  it("step 6", () => {})
  it("step 8, API call", () => {})
  it("continou on reservation form from tandom result", () => {})
});
