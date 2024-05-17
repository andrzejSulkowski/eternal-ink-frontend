import type { Meta, StoryObj } from "@storybook/react";
import Tick from "./Tick";
import { fn } from "@storybook/test";

const meta = {
  title: "Ethernal Ink/Tick",
  component: Tick,
  decorators: [],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {
  }
} satisfies Meta<typeof Tick>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        address: "0x1234567890",
        txHash: "0x1234567890",
        onClick: fn()
    }
};