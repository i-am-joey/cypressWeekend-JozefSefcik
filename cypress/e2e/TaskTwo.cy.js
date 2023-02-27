///<reference types="cypress" />

describe('Task Two', () => {
    beforeEach(() => {
    cy.visit(
      Cypress.env("url") + "/en/airport/bcn/barcelona-el-prat-barcelona-spain/"
    )
    cy.get('[data-test="CookiesPopup-Accept"]').click();
    })
    it("pick random card", () => {
        
    })
})