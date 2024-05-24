describe('navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('navigates to the main page', () => {
    cy.getByTestId('main.link').click()
    cy.location('pathname').should('eq', '/')
  })

  it('navigates to the about page', () => {
    cy.getByTestId('about.link').click()
    cy.location('pathname').should('eq', '/about')
  })

  it('navigates to the profile page', () => {
    cy.login(Cypress.env('email') as string, Cypress.env('password') as string)
    cy.wait(1000)
    cy.visit('http://localhost:3000/')
    cy.getByTestId('profile.link').click()
    cy.location('pathname').should('eq', '/profile')
  })

  it('navigates to the articles page', () => {
    cy.getByTestId('articles.link').click()
    cy.location('pathname').should('eq', '/articles')
  })
})
