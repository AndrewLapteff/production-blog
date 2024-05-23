describe('template spec', () => {
  it('renders the main page', () => {
    cy.visit('/')
    cy.get("[data-testid='main']").should('contain.text', 'Main')
  })
  it('redirects to the main page', () => {
    cy.visit('/profile')
    cy.get("[data-testid='main']").should('contain.text', 'Main')
  })
  it('redirects to the main page', () => {
    cy.visit('/fsdfsf')
    cy.get("[data-testid='not-found']").should('exist')
  })
})
