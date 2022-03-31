describe('Tomates podridos main page', () => {
  it('User should be able to visit the page and see title and all movies displayed', () => {
    cy.visit('http://localhost:3000')
  });

  it("Should have a header with Tomates Podriodos on it", () => {
    cy.visit('http://localhost:3000').contains("Tomates Podridos")
  });

  it("Should have a footer with Company name", () => {
    cy.visit('http://localhost:3000').contains('©2022 Tomates Podritos | A fake movie site by Emily C and Eric M')
  });

  it("Should display error message for 400 status code", () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 404,
  });
  cy.visit('http://localhost:3000/').contains(
    "Oops! something went wrong. Please try again. If problem persists, send complaints to Robbie and Scott"
  );
});

// it("Should contain a search bar", () => {
//   cy.get('form input[placeholder="Search title here"]')
//     get('form input[type="text"]')
//     get('form input[name="title"]');
// });

});
