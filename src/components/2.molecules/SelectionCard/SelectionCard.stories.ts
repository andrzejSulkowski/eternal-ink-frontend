import type { Meta, StoryObj } from "@storybook/react";
import SelectionCard from "./SelectionCard";
import Cube from "@/components/Svgs/Cube";

const meta = {
  title: "Eternal Ink/molecules/SelectionCard",
  component: SelectionCard,
  decorators: [],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {},
} satisfies Meta<typeof SelectionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: Cube(),
    title: "Select Blockchain",
    description:
      "Make an informed choice between two blockchain giants for your engraving or hashing needs:",
    options: [
      {
        title: "Bitcoin",
        description: "The epitome of security and stability. Perfect for those valuing a strong legacy. Higher fees reflect its vast network",
      },
      {
        title: "Ethereum",
        description: "Some say it's the future of blockchain. Lower fees and faster transactions make it a great choice for those valuing speed and efficiency.",
      },
    ],
  },
};
