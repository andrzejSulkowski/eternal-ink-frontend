import type { Meta, StoryObj } from '@storybook/react';
import Tag from './Tag';
import { fn } from '@storybook/test';

const meta = {
  title: 'Eternal Ink/atoms/Tag',
  component: Tag,
  decorators: [],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof Tag>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "on the Bitcoin Blockchain",
  },
};