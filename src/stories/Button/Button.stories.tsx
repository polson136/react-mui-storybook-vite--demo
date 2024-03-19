import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/button/button';
import { Fingerprint } from '@mui/icons-material';
import * as DocBlock from "@storybook/blocks"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      page: () => <>
      <DocBlock.Title />
      <DocBlock.Description />
      <DocBlock.Primary />
      <DocBlock.Controls />
      </>
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
   options: { control: 'object' },
   variant: { control: 'select', options: ['text', 'outlined', 'contained', 'icon'] },
   icon: { control: 'select', options: ['fingerprint', 'alarm', 'home', 'delete'] },
   size: { control: 'radio', options: ['small', 'medium', 'large'] },
   children: { 
    control: 'select',
    options: ['default', 'with Children'],
    mapping: {
      default: null,
      'with Children': <><Fingerprint fontSize='inherit' /> Touch me! </>,
    },
   },

  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
 
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    options: { color: 'primary', disabled: false },
    variant: 'text',
}
};

export const Outlined: Story = {
  args: {
    options: { color: 'secondary', disabled: false },
    variant: 'outlined',
  },
};

export const Contained: Story = {
  args: {
    options: { color: 'error', disabled: false },
    variant: 'contained',
  },
};

export const Icon: Story = {
  args: {
    options: { color: 'success', disabled: false },
    variant: 'icon',
    icon: 'fingerprint',
  },
};