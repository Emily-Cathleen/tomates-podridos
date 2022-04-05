describe("Tomates podridos main page", () => {
  it("As a user, when I visit the page I should see all movies displayed", () => {
    cy.visit("http://localhost:3000");
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
    "id": 694919,
    "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
    "title": "Money Plane",
    "average_rating": 6.875,
    "release_date": "2020-09-29"
});
  });

  //HEADER
  it("As a user, I should see a header with the Tomates Podriodos logo on it", () => {
    cy.visit("http://localhost:3000");
    cy.get('[alt="Home button tomates podridos logo"]')
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });

  // FOOTER
  it("As a user, I should see a footer with Company name", () => {
    cy.visit("http://localhost:3000").contains(
      "©2022 Tomates Podridos"
    );
  });

  


  //ERROR MSG
  it("As a user, if my network request fails, I should see a display error message for 400 status code", () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 404,
    });
    cy.visit("http://localhost:3000/").contains(
      "Oops! something went wrong. Please try again. If problem persists, send complaints to Robbie and Scott"
    );
  });

});
