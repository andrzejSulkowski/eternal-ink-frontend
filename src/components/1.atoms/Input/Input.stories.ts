import type { Meta, StoryObj } from "@storybook/react";
import Input from "@/components/1.atoms/Input/Input";
import { fn } from "@storybook/test";

const meta = {
  title: "Eternal Ink/atoms/Input",
  component: Input,
  decorators: [],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    placeholder: { control: "text" },
    value: { control: "text" },
  },
  args: { onInput: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    placeholder: "Your Message",
    value: undefined,
  },
};

export const Filled: Story = {
  args: {
    placeholder: "Your Message",
    value: "Hello, World!",
  },
};

