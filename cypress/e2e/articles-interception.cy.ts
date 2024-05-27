describe('Articles', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/articles?*', {
      fixture: 'articles.json'
    }).as('getArticles')
  })

  it('should intercept and return only two articles', () => {
    cy.visit('http://localhost:3000/articles')
    cy.wait('@getArticles')
      .its('response.body')
      .its(1) // second article
      .its('id')
      .should('eq', 2) // id equals 2

    cy.getByTestId('article-item').should('have.length', 2)
  })
})
