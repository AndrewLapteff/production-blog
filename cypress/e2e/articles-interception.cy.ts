describe('Articles', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'http://localhost:4000/articles?_expand=profile&_page=1&_limit=5&_sort=views&_order=asc&q=',
      {
        fixture: 'articles.json'
      }
    ).as('getArticles')
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
