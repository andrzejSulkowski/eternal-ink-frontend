import type { Meta, StoryObj } from '@storybook/react';
import ToggleButton from './ToggleButton';
import { fn } from '@storybook/test';

const meta = {
  title: 'Eternal Ink/atoms/ToggleButton',
  component: ToggleButton,
  decorators: [],
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ToggleButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isSelected: false,
    onClick: fn(),
    children: "Toggle Button",
  },
};

export const Selected: Story = {
    args: {
        isSelected: true,
        onClick: fn(),
        children: "Toggle Button",
    }
}