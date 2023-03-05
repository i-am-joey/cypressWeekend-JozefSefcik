/// <reference types="cypress" />

describe("Task One ", () => {
  it("part one", () => {
    cy.visit(
      Cypress.env("url") + "/en/airport/bcn/barcelona-el-prat-barcelona-spain/"
    );
    cy.get('[data-test="CookiesPopup-Accept"]').click();

    cy.intercept(
      "GET",
      "https://skypicker-api.infinario.com/webxp/projects/bd6048c2-c115-11ea-b1b2-6e9e95c44d66/bundle"
    ).as("redirection");

    cy.url().should(
      "eq",
      "https://www.kiwi.com/en/airport/bcn/barcelona-el-prat-barcelona-spain/"
    );

    //POINT 5. Click on first picture card in popular cities section from random click

    cy.get('[data-test="PictureCard"] > [data-test="PictureCardContent"]')
      .should("have.length.gt", 7)
      .its("length")
      .then((n) => Cypress._.random(0, n - 1))
      .then((k) => {
        cy.log(`picked random index ${k}`);
        cy.get('[data-test="PictureCard"] > [data-test="PictureCardContent"]')
          .eq(k)
          .click();
      });

    //POINT 6. Verify rederiction to correct page in search/results and search inputs
    cy.wait("@redirection").then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.eq(200);
    });
    cy.url().should("contain", "search/results");

    //POINT 7. Add one additional luggage in filter
    cy.get(
      '[data-test="BagsPopup-checked"] > .LabeledStepperstyled__StepperWrap-sc-oo4v0a-4 > .StepperStateless__StyledStepper-sc-1nz7kdj-0 > .iVyNrG > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1nfggrh-0'
    ).click();

    //POINT 8. Verify that new results are loaded
    cy.url().should("contain", "?bags=0.1-");

    // POINT 9. continue on reservation form from random click

    cy.get('[data-test="BookingButton"]', { timeout: 15000 })
      .should("have.length.gt", 3)
      .its("length")
      .then((n) => Cypress._.random(0, n - 1))
      .then((k) => {
        cy.log(`picked random index ${k}`);
        cy.get('[data-test="BookingButton"]').eq(k).click();
      });
    cy.get('[data-test="MagicLogin-GuestTextLink"]').click();

    //POINT 10. Verify that you are correctly redirected to booking page
    cy.url().should("contain", "en/booking?activeStep=");
  });
});
