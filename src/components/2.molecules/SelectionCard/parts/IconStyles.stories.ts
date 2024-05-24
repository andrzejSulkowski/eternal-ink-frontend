import type { Meta, StoryObj } from "@storybook/react";
import IconStyles from "./IconStyles";
import Cube from "@/components/Svgs/Cube"
import Fi from "@/components/Svgs/Fi"
import ThreeRoad from "@/components/Svgs/ThreeRoad"
import DollarBanner from "@/components/Svgs/DollarBanner";


const meta = {
  title: "Ethernal Ink/SelectionCard/IconStyles",
  component: IconStyles,
  decorators: [],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {},
} satisfies Meta<typeof IconStyles>;

export default meta;
type Story = StoryObj<typeof meta>;



export const IconCube: Story = {
    args: {
        icon: Cube()
    }
};

export const IconFi: Story = {
    args: {
        icon: Fi()
    }
};

export const IconThreeRoad: Story = {
    args: {
        icon: ThreeRoad()
    }
};

export const IconDollarBanner: Story = {
    args: {
        icon: DollarBanner()
    }
};
