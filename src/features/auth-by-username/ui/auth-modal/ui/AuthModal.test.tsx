import { render } from '@testing-library/react'
import AuthModal from './AuthModal'
import { useSelector } from 'react-redux'
jest.mock('react-redux')

// jest.mock('../../../../../app/providers/store-provider/confg/store.ts', () => {
//   return {
//     email: '',
//     isLoading: false,
//     password: '',
//     username: '',
//     error: undefined
//   }
// })

describe('AuthModal.ts', () => {
  it('should ', () => {
    // jest.spyOn(reduxHooks, 'useSelector').mockReturnValue({
    //   email: '',
    //   isLoading: false,
    //   password: '',
    //   username: '',
    //   error: undefined
    // })
    // useSelector.mockReturnValue({
    //   email: '',
    //   isLoading: false,
    //   password: '',
    //   username: '',
    //   error: undefined
    // })
    // const component = render(<AuthModal isOpen={true} setOpen={() => {}} />)
    // expect(component.getByTestId('email')).toBeInTheDocument()
  })
})
