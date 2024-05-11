import type { Meta, StoryObj } from "@storybook/react";
import Message from "@/components/Message/Message";

const meta = {
  title: "Ethernal Ink/Message",
  component: Message,
  decorators: [],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    address: { control: "text" },
    message: { control: "text" },
  },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Solid: Story = {
  args: {
    message: "Hello, World!",
    address: "432ffr7sAHTD9CgdQo3HTMTkV8LK4ZKey8",
    variant: "solid",
  },
};

export const Outline: Story = {
  args: {
    message: "Engraved Message!",
    address: "1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71",
    variant: "outline",
  },
};
