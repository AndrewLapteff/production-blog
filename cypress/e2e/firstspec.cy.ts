describe('template spec', () => {
  it('renders the main page', () => {
    cy.visit('http://localhost:3000/')
    cy.get("[data-testid='main']").should('contain.text', 'Main')
  })
  it('redirects to the main page', () => {
    cy.visit('http://localhost:3000/profile')
    cy.get("[data-testid='main']").should('contain.text', 'Main')
  })
  it('redirects to the error page', () => {
    cy.visit('http://localhost:3000/fsdfsf')
    cy.get("[data-testid='not-found']").should('exist')
  })
  it('redirects to the profile page', () => {
    cy.login(Cypress.env('email') as string, Cypress.env('password') as string)
    cy.wait(1000)
    cy.visit('http://localhost:3000/profile')
    cy.get("[data-testid='ProfileCard.username.input']").should('exist')
  })
})
