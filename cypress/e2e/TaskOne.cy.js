/// <reference types="cypress" />

describe("Task One ", () => {

  it("passes", () => {
    cy.visit(Cypress.env("url") + "/en/country/france/")
    cy.get('[data-test="CookiesPopup-Accept"]').click()
  });

  it("All sections are correctly loaded", () => {

  })

  it("Destination in search should be France", () => {

  })

  it("H1 element should have correct text", () => {

  })

  it("Click on first picture card in popular cities section", () => {

  })

  it("Verify rederiction to correct page in search/results", () => {

  })

  it("Add one additional luggage in filter", () => {

  })

  it("Verify that new results are loaded", () => {

  })

  it("Continue in reservation process from first choice", () => {

  })

  it("Verify redirection to booking page", () => {

  })

});
