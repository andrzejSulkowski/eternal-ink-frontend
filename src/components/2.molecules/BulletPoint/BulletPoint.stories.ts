import type { Meta, StoryObj } from "@storybook/react";
import BulletPoint from "./BulletPoint";

const meta = {
  title: "Eternal Ink/molecules/BulletPoint",
  component: BulletPoint,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {},
} satisfies Meta<typeof BulletPoint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    highlighted: "Celebrating Milestones:",
    description: "Immortalize birthday wishes, anniversaries, or the birth of a new family member. Immortalize birthday wishes, anniversaries, or the birth of a new family member"
  },
};
