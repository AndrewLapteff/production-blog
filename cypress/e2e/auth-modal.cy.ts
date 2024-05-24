describe('auth modal', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.getByTestId('login-modal.button').click()

    cy.getByTestId('password.input').as('passwordInput')
    cy.getByTestId('email.input').as('emailInput')
    cy.getByTestId('login.button').as('loginButton')
    cy.getByTestId('modal-background').as('modalBackground')
  })

  it('opens the auth modal and closes', () => {
    cy.get('@emailInput').should('exist')
    cy.get('@passwordInput').should('exist')
    cy.get('@loginButton').should('exist')
    cy.get('@modalBackground').click()
  })

  it('logs in with incorrect credentials', () => {
    cy.get('@emailInput').type('incorrect@gmail.com', { force: true })
    cy.get('@passwordInput').type('incorrect', { force: true })
    cy.get('@loginButton').click()
    cy.get('@modalBackground').should('contain.text', 'Cannot find user')
  })

  it('logs in with correct credentials', () => {
    cy.get('@emailInput').type(Cypress.env('email') as string, {
      force: true
    })
    cy.get('@passwordInput').type(Cypress.env('password') as string, {
      force: true
    })
    cy.get('@loginButton').click()
    cy.visit('http://localhost:3000/profile')
    cy.getByTestId('ProfileCard.username.input').should('exist')
  })
})
