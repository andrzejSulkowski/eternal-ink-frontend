import type { Meta, StoryObj } from "@storybook/react";
import Textarea from "./Textarea";
import { fn } from "@storybook/test";

const meta = {
  title: "Eternal Ink/Textarea",
  component: Textarea,
  decorators: [],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placeholder: { control: "text" },
    value: { control: "text" },
  },
  args: { onInput: fn() },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

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

