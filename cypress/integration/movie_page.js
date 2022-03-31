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

  // it("Should display a button to return the user to home page", () => {
  //   cy.get(".x-button")
  //   .click()
  //   .url().should("eq", "http://localhost:3000/movie.id")
  // })

  });
