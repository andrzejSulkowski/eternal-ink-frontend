import type { Meta, StoryObj } from "@storybook/react";
import LoadingSpinner from "@/components/1.atoms/LoadingSpinner/LoadingSpinner";

const meta = {
  title: "Eternal Ink/atoms/Loading Spinner",
  component: LoadingSpinner,
  decorators: [],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        innerText: "1/2",
        label: "Confirming Funds"
    }
};