import { Meta, StoryFn } from '@storybook/react';
import { Input } from './Input';
import * as DocBlock from '@storybook/blocks';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],

  argTypes: {
    placeholder: {
      control: 'text',
      description: 'The placeholder of the input',
    },
    label: {
      control: 'text',
      description: 'The label of the input',
    },
  },
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
    docs: {
      page: () => (
        <>
          <DocBlock.Title />
          <DocBlock.Description />
          <DocBlock.Primary />
          <DocBlock.Controls />
          <DocBlock.Stories />
        </>
      ),
    },
  },
};

export default meta;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;
export const Primary = Template.bind({});
export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label',
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  type: 'password',
};
