/// <reference types="cypress" />

describe("Task One ", () => {
  beforeEach(() => {
    cy.visit(
      Cypress.env("url") + "/en/airport/bcn/barcelona-el-prat-barcelona-spain/"
    )
    cy.get('[data-test="CookiesPopup-Accept"]').click();
  })
  it("part one", () => {
    //visit BCN page

     cy.url().should(
      "eq",
      "https://www.kiwi.com/en/airport/bcn/barcelona-el-prat-barcelona-spain/"
    );

    //All sections are correctly loaded
    cy.get('[data-test="NavBar"]').should("be.visible");
    cy.get(".Herostyled__ImageWrapper-sc-j7sblu-0").should("be.visible");
    cy.get(".Herostyled__SearchForm-sc-j7sblu-4").should("be.visible");
    cy.get("main > :nth-child(3)").should("be.visible");
    cy.get('[data-test="TrendingDestinations"]').should("be.visible");
    cy.get('[data-test="PopularFlights"]').should("be.visible");
    cy.get('[data-test="DestinationsMap"]').should("be.visible");
    cy.get('[data-test="Faq"]').should("be.visible");
    cy.get('[data-test="TopAirlines"]').should("be.visible");
    cy.get(".AppSectionDesktopColorstyled__Wrapper-sc-1av0nuf-0").should(
      "be.visible"
    );
    cy.get('[data-test="ExploreWrapper"]').should("be.visible");
    cy.get(".gwXwTN").should("be.visible");

    //Destination in search should be Barcelona

    cy.get('[data-test="SearchFieldItem-origin"]').should("be.visible");
    cy.get(
      '[data-test="PlacePickerInput-origin"] > [data-test="PlacePickerInputPlace"]'
    )
      .should("be.visible")
      .and("contain", "Barcelona BCN");

    //H1 element should have correct text

    cy.get(".Herostyled__Title-sc-j7sblu-2")
      .should("be.visible")
      .and("contain.text", "Barcelona–El Prat (BCN)");

    //Click on first picture card in popular cities section

    cy.get(
      ':nth-child(1) > [data-test="PictureCard"] > [data-test="PictureCardContent"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.kiwi.com/en/search/results/barcelona-spain/ibiza-spain/2023-04-19"
    );
  });

  it("Part two", () => {
    //Verify rederiction to correct page in search/results

    cy.get('[data-test="LandingSearchButton"]').click();
    cy.url().should(
      "eq",
      "https://www.kiwi.com/en/search/tiles/barcelona-el-prat-barcelona-spain/anywhere/anytime"
    );

    //Add one additional luggage in filter
    cy.get('[data-test="SearchFormFilters-button-bags"]').click();
    cy.get(
      '[data-test="BagsPopup-checked"] > .LabeledStepperstyled__StepperWrap-sc-oo4v0a-4 > .StepperStateless__StyledStepper-sc-1nz7kdj-0 > .iVyNrG > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1nfggrh-0'
    ).click();

    //Verify that new results are loaded
    cy.url().should("contain", "?bags=0.1-");
  });

  it("Continue in reservation process from first choice", () => {});

  it("Verify redirection to booking page", () => {});
});
