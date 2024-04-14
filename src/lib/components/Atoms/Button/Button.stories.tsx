import { Meta, StoryFn } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Button',
    },
  },
}

export default meta

const Template: StoryFn<typeof Button> = (args) => <Button />
export const Primary = Template.bind({})
