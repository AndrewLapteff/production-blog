describe('notifications', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it("after signing in opens notification dropdown and checks whether it's greater than 0 or no, then after closing it still has to exist", () => {
    cy.login(Cypress.env('email') as string, Cypress.env('password') as string)
    cy.wait(1000)
    cy.visit('http://localhost:3000/')
    cy.getByTestId('notification-item').should('not.exist')
    cy.getByTestId('notification.button').click().wait(1500)
    cy.getByTestId('notification-item').should('have.length.greaterThan', 0)
    cy.getByTestId('notification-close.button').click()
    cy.getByTestId('notification-item').should('exist')
  })
})
