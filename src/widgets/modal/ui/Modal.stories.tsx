import type { Meta, StoryObj } from '@storybook/react'
import 'app/styles/index.scss'
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator'
import { Modal } from './Modal'
import { Button } from 'shared/ui/button/Button'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'

const meta: Meta<typeof Modal> = {
  title: 'widgets/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [RouterDecorator]
}

export default meta

type Story = StoryObj<typeof meta>

export const ModalLight: Story = {
  render: (arg) => {
    return (
      <Modal
        setOpen={() => {}}
        isOpen={true}
        header={'Header'}
        main={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        footer={
          <>
            <Button size="m" variant="primary">
              Yes
            </Button>
            <Button size="m" variant="primary">
              No
            </Button>
          </>
        }
      ></Modal>
    )
  }
}

export const ModalDark: Story = {
  render: (arg) => {
    return (
      <Modal
        setOpen={() => {}}
        isOpen={true}
        header={'Header'}
        main={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        footer={
          <>
            <Button size="m" variant="primary">
              Yes
            </Button>
            <Button size="m" variant="primary">
              No
            </Button>
          </>
        }
      ></Modal>
    )
  },
  decorators: [ThemeDecorator('dark')]
}
