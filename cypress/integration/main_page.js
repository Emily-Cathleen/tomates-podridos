describe('Tomates podridos main page', () => {
  it('User should be able to visit the page and see title and all movies displayed', () => {
    cy.visit('http://localhost:3000')
  });

  //HEADER
  it("Should have a header with Tomates Podriodos on it", () => {
  cy.get('[alt="Home button tomates podridos logo"]')
  .should('be.visible')
  .and(($img) => {
    expect($img[0].naturalWidth).to.be.greaterThan(0)
  });
});


//FOOTER
  it("Should have a footer with Company name", () => {
    cy.visit('http://localhost:3000').contains('©2022 Tomates Podritos')
  });


//ERROR MSG
  it("Should display error message for 400 status code", () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 404,
  });
  cy.visit('http://localhost:3000/').contains(
    "Oops! something went wrong. Please try again. If problem persists, send complaints to Robbie and Scott"
  );
});

//SEARCH BAR
// it("Should contain a search bar", () => {
//   cy.get('form input[placeholder="Search title here"]')
//     get('form input[type="text"]')
//     get('form input[name="title"]');
// });

});
