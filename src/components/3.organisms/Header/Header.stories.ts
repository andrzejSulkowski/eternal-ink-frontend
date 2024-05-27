import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import { fn } from '@storybook/test';

const meta = {
  title: 'Eternal Ink/Header',
  component: Header,
  decorators: [],
  parameters: {
    layout: '',
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof Header>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onCTAClick: fn(),
    onHrefClick: fn(),
    routes: ["About", "Engrave", "Retrieve"],
    currentRouteIdx: 0,
  },
};