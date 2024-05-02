import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config'
import { Modal } from './Drawer'
import { Button } from 'shared/ui/button/Button'

const meta: Meta<typeof Modal> = {
  title: 'widgets/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen'
  }
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
