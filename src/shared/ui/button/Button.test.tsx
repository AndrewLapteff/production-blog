/* eslint-disable i18next/no-literal-string */
import { screen, render } from '@testing-library/react'
import { Button } from './Button'

describe('Button.text.tsx', () => {
  it('should render proper text', () => {
    render(<Button variant="primary">Text</Button>)
    expect(screen.getByText('Text')).toBeInTheDocument()
  })

  it('should have proper class', () => {
    render(<Button variant="primary">Text</Button>)
    expect(screen.getByText('Text')).toHaveClass('primary')
  })
})
