import { Meta, StoryFn } from '@storybook/react';
import { Header } from './Header';
import * as DocBlock from '@storybook/blocks';

const meta: Meta<typeof Header> = {
  title: 'Atoms/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
    children: 'Header',
    Variant: 'h1',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The content of the header',
    },
    Variant: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        description: 'The variant of the header',
      },
    },
  },
  parameters: {
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
const Template: StoryFn<typeof Header> = (args) => <Header {...args} />;
export const Primary = Template.bind({});
