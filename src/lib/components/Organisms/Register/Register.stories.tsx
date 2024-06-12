import { Meta, StoryFn } from '@storybook/react';
import { Register } from './Register';

const meta: Meta<typeof Register> = {
  title: 'Organisms/Register',
  component: Register,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#161616',
        },
        {
          name: 'light',
          value: '#fff',
        },
      ],
    },
  },
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Button',
    },
  },
};

export default meta;
const Template: StoryFn<typeof Register> = (args) => <Register />;
export const Primary = Template.bind({});
