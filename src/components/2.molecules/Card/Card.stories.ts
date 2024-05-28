import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta = {
  title: "Eternal Ink/molecules/Card",
  component: Card,
  decorators: [],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    title: "Transaction Cost can range",
    highlightedTitle: "from 1$ up to 32$",
    description:
      "Just type in your message and we'll show you what the engraving fees are at the present time",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    title: "Transaction Cost can range",
    highlightedTitle: "from 1$ up to 32$",
    description:
      "Just type in your message and we'll show you what the engraving fees are at the present time",
  },
};
