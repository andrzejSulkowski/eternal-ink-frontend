import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { fn } from "@storybook/test";

const meta = {
  title: "Eternal Ink/Button",
  component: Button,
  decorators: [],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    textContent: "Begin Your Legacy"
  },
};

export const Filled: Story = {
  args: {
    textContent: "Begin Your Legacy",
  },
};

