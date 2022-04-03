describe("Tomates Podridos Movie Page", () => {
  it("User should be able to visit the page and see a single movie with details displayed", () => {
    cy.visit("http://localhost:3000/694919");
  });

  //HEADER
  it("Should have a header with Tomates Podriodos logo on it", () => {
    cy.visit("http://localhost:3000/694919");
    cy.get('[alt="Home button tomates podridos logo"]')
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });

  //FOOTER
  it("Should have a footer with Company name", () => {
    cy.visit("http://localhost:3000").contains(
      "©2022 Tomates Podridos"
    );
  });

  //ERROR MSG
  it("Should display error message for 400 status code", () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919", {
      statusCode: 404,
    });
    cy.visit("http://localhost:3000/").contains(
      "Oops! something went wrong. Please try again. If problem persists, send complaints to Robbie and Scott"
    );
  });

  //BACK BUTTON
  // it("Should display a button to return the user to home page", () => {
  //   cy.get(".x-button")
  //   .click()
  //   .url().should("eq", "http://localhost:3000/movie.id")
  // });

  //TRAILOR - YOUTUBE LINK
  // it("Should display a trailor for the selected movie ", () => {
  //   cy.visit('http://localhost:3000').contains('')
  // });
});
