import type { Meta, StoryObj } from "@storybook/react";
import PulsingButton from "./PulsingButton";
import { fn } from "@storybook/test";

const meta = {
  title: "Eternal Ink/Pulsing Button",
  component: PulsingButton,
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
    onClick: () => console.log("Button clicked")
  }
} satisfies Meta<typeof PulsingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
      onClick: () => console.log("Button clicked")
    }
};