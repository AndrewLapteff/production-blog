import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { withTranslation } from 'react-i18next'
import { renderWithTranslation } from 'shared/lib'

describe('Sidebar.tsx', () => {
  it('should be open', () => {
    const SideBar = withTranslation('translation')(Sidebar)
    renderWithTranslation(<SideBar />)
    const element = screen.getByTestId('button')
    expect(screen.getByTestId('sidebar')).toHaveClass('folded')
    fireEvent.click(element)
    expect(screen.getByTestId('sidebar')).not.toHaveClass('folded')
  })
})
