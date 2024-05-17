import type { Meta, StoryObj } from "@storybook/react";
import PaperClip from "./PaperClip";
import { useHiddenFileInput } from "@/hooks/useHiddenFileInput";

const meta = {
  title: "Ethernal Ink/Message Form/Parts/Paper Clip",
  component: PaperClip,
  decorators: [],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
  args: { },
} satisfies Meta<typeof PaperClip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    ...useHiddenFileInput()
  },
};

