import { Sidebar } from 'widgets/sidebar'
import '../../src/app/styles/index.scss'

describe('NotificationButton.cy.tsx', () => {
  beforeEach(() => {
    cy.mount(<Sidebar />)
  })

  it('should check the width of the sidebar in folded and unfolded states', () => {
    cy.getByTestId('sidebar').should('have.css', 'width', '30px')
    cy.getByTestId('sidebar.button').should('exist').click()
    cy.getByTestId('sidebar').should('have.css', 'width', '250px')
    cy.getByTestId('sidebar.button').should('exist').click()
    cy.getByTestId('sidebar').should('have.css', 'width', '30px')
  })
})
