import type { Meta, StoryObj } from '@storybook/react';
import ToggleGroup from './ToggleGroup';
import { fn } from '@storybook/test';

const meta = {
  title: 'Eternal Ink/ToggleGroup',
  component: ToggleGroup,
  decorators: [],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {
    onChange: fn(),
    buttons: [
      { value: '1', label: 'Button 1' },
      { value: '2', label: 'Button 2' },
      { value: '3', label: 'Button 3' },
    ],
  },
} satisfies Meta<typeof ToggleGroup>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: fn(),
    buttons: [
      { value: '1', label: 'Button 1' },
      { value: '2', label: 'Button 2' },
      { value: '3', label: 'Button 3' },
    ],
  },
};