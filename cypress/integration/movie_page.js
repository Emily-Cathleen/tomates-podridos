describe("Tomates Podridos Movie Page", () => {
  it("As a user, I should be able to visit this page and see a single movie with details displayed", () => {
    cy.visit("http://localhost:3000/694919");
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919",
      {
        movie: {
          id: 694919,
          title: "Money Plane",
          poster_path:
            "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
          backdrop_path:
            "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
          release_date: "2020-09-29",
          overview:
            "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
          genres: ["Action"],
          budget: 0,
          revenue: 0,
          runtime: 82,
          tagline: "",
          average_rating: 6.875,
        },
      }
    );
  });

  //HEADER
  it("As a user, I should see a header with the Tomates Podriodos logo on it", () => {
    cy.visit("http://localhost:3000/694919");
    cy.get('[alt="Home button tomates podridos logo"]')
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });

  //ERROR MSG
  it("As a user, if my network request fails, I should see a display error message for 400 status code", () => {
    cy.intercept(
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919",
      {
        statusCode: 404,
      }
    );
    cy.visit("http://localhost:3000/694919").contains(
      "Oops! something went wrong. Please try again. If problem persists, send complaints to Robbie and Scott"
    );
  });

  // BACK BUTTON
  it("As a user, I should see a button to return the me to the home page", () => {
    cy.visit("http://localhost:3000/694919");
    cy.get("button")
      .should("contain", "BACK")
      .click()
      .url()
      .should("eq", "http://localhost:3000/");
  });
});
