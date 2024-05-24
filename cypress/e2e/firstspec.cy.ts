describe('template spec', () => {
  it('renders the main page', () => {
    cy.visit('http://localhost:3000/')
    cy.getByTestId('main').should('contain.text', 'Main')
  })

  it('redirects to the main page', () => {
    cy.visit('http://localhost:3000/profile')
    cy.getByTestId('main').should('contain.text', 'Main')
  })

  it('redirects to the error page', () => {
    cy.visit('http://localhost:3000/fsdfsf')
    cy.getByTestId('not-found').should('exist')
  })

  it('redirects to the profile page', () => {
    cy.login(Cypress.env('email') as string, Cypress.env('password') as string)
    cy.wait(1000)
    cy.visit('http://localhost:3000/profile')
    cy.getByTestId('ProfileCard.username.input').should('exist')
  })
})
